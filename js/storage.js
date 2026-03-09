// Harness Engineering 工坊 - 本地存储管理
// 处理学习进度、掌握状态等数据的持久化

const SafeStorage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('读取存储数据失败:', error);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('保存存储数据失败:', error);
      return false;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('删除存储数据失败:', error);
      return false;
    }
  }
};

const STORAGE_KEYS = {
  MASTERED_ITEMS: 'harness_learn_mastered',
  LEARNING_PROGRESS: 'harness_learn_progress',
  QUIZ_RESULTS: 'harness_learn_quiz_results',
  LAST_VISITED: 'harness_learn_last_visited',
  SETTINGS: 'harness_learn_settings'
};

function loadMasteredItems() {
  return SafeStorage.get(STORAGE_KEYS.MASTERED_ITEMS, []);
}

function saveMastered(itemId, mastered) {
  const masteredItems = loadMasteredItems();
  const itemIdNum = parseInt(itemId);
  if (mastered) {
    if (!masteredItems.includes(itemIdNum)) masteredItems.push(itemIdNum);
  } else {
    const index = masteredItems.indexOf(itemIdNum);
    if (index > -1) masteredItems.splice(index, 1);
  }
  SafeStorage.set(STORAGE_KEYS.MASTERED_ITEMS, masteredItems);
  window.dispatchEvent(new CustomEvent('masteredChanged', { detail: { itemId: itemIdNum, isMastered: mastered } }));
}

function isMastered(itemId) {
  return loadMasteredItems().includes(parseInt(itemId));
}

function getMasteredCount() {
  return loadMasteredItems().length;
}

function loadProgress() {
  return SafeStorage.get(STORAGE_KEYS.LEARNING_PROGRESS, {
    currentItem: 1, visitedItems: [], totalTime: 0, lastStudyDate: null
  });
}

function saveProgress(progressData) {
  const currentProgress = loadProgress();
  SafeStorage.set(STORAGE_KEYS.LEARNING_PROGRESS, { ...currentProgress, ...progressData });
}

function markItemVisited(itemId) {
  const progress = loadProgress();
  const itemIdNum = parseInt(itemId);
  if (!progress.visitedItems.includes(itemIdNum)) progress.visitedItems.push(itemIdNum);
  progress.currentItem = Math.max(progress.currentItem, itemIdNum);
  progress.lastStudyDate = new Date().toISOString();
  saveProgress(progress);
}

function getVisitedCount() {
  return loadProgress().visitedItems.length;
}

function loadQuizResults() {
  return SafeStorage.get(STORAGE_KEYS.QUIZ_RESULTS, {});
}

function saveQuizResult(itemId, isCorrect, selectedOption, correctOption) {
  const results = loadQuizResults();
  const itemIdNum = parseInt(itemId);
  if (!results[itemIdNum]) results[itemIdNum] = [];
  results[itemIdNum].push({ timestamp: new Date().toISOString(), isCorrect, selectedOption, correctOption });
  SafeStorage.set(STORAGE_KEYS.QUIZ_RESULTS, results);
}

function getQuizStats(itemId) {
  const results = loadQuizResults();
  if (itemId !== undefined && itemId !== null) {
    const itemResults = results[parseInt(itemId)] || [];
    const correct = itemResults.filter(function(r) { return r.isCorrect; }).length;
    const total = itemResults.length;
    return { correct: correct, total: total, accuracy: total > 0 ? (correct / total) * 100 : 0 };
  }
  var totalCorrect = 0, totalAttempts = 0;
  Object.values(results).forEach(function(itemResults) {
    totalAttempts += itemResults.length;
    totalCorrect += itemResults.filter(function(r) { return r.isCorrect; }).length;
  });
  return { correct: totalCorrect, total: totalAttempts, accuracy: totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0 };
}

function exportData() {
  return JSON.stringify({
    mastered: loadMasteredItems(),
    progress: loadProgress(),
    quizResults: loadQuizResults(),
    exportDate: new Date().toISOString(),
    version: '1.0'
  }, null, 2);
}

function importData(jsonData) {
  try {
    var data = JSON.parse(jsonData);
    if (data.mastered) SafeStorage.set(STORAGE_KEYS.MASTERED_ITEMS, data.mastered);
    if (data.progress) SafeStorage.set(STORAGE_KEYS.LEARNING_PROGRESS, data.progress);
    if (data.quizResults) SafeStorage.set(STORAGE_KEYS.QUIZ_RESULTS, data.quizResults);
    return true;
  } catch (error) {
    console.error('导入数据失败:', error);
    return false;
  }
}

function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(function(key) { SafeStorage.remove(key); });
  window.location.reload();
}

function getOverallStats() {
  var masteredCount = getMasteredCount();
  var visitedCount = getVisitedCount();
  var quizStats = getQuizStats();
  var progress = loadProgress();
  var totalItems = (typeof WordRoots !== 'undefined') ? WordRoots.length : 25;
  return {
    mastered: masteredCount, visited: visitedCount, totalItems: totalItems,
    masteredPercentage: (masteredCount / totalItems) * 100,
    visitedPercentage: (visitedCount / totalItems) * 100,
    quizAccuracy: quizStats.accuracy, totalQuizAttempts: quizStats.total,
    lastStudyDate: progress.lastStudyDate
  };
}

function getStudyRecommendations() {
  var stats = getOverallStats();
  var recommendations = [];
  if (stats.masteredPercentage < 25) recommendations.push({ type: 'learning', title: '建议使用学习模式', description: '系统学习 Harness Engineering 基础概念，建立 Agent-First 工程知识框架' });
  if (stats.visitedPercentage > 50 && stats.masteredPercentage < 30) recommendations.push({ type: 'review', title: '建议加强复习', description: '使用闪卡模式巩固已学的核心概念' });
  if (stats.quizAccuracy < 70 && stats.totalQuizAttempts > 5) recommendations.push({ type: 'practice', title: '建议多做练习', description: '重点练习正确率较低的知识点' });
  if (stats.masteredPercentage > 80) recommendations.push({ type: 'advanced', title: '考虑深入实践', description: '可以开始在项目中实际应用 Harness Engineering 方法论' });
  return recommendations;
}

// 兼容旧版 StorageManager API
var StorageManager = {
  getProgress: function() {
    var mastered = loadMasteredItems();
    var progress = loadProgress();
    return {
      masteredRoots: mastered,
      currentRootIndex: progress.currentItem - 1 >= 0 ? progress.currentItem - 1 : 0,
      lastStudyDate: progress.lastStudyDate
    };
  },
  markRootAsMastered: function(rootId) {
    saveMastered(rootId, true);
    return this.getProgress();
  },
  unmarkRootAsMastered: function(rootId) {
    saveMastered(rootId, false);
    return this.getProgress();
  },
  updateProgress: function(rootIndex) {
    saveProgress({ currentItem: rootIndex + 1 });
    return this.getProgress();
  },
  resetProgress: function() {
    Object.values(STORAGE_KEYS).forEach(function(key) { SafeStorage.remove(key); });
    return true;
  }
};

// 挂载到 window
if (typeof window !== 'undefined') {
  window.StorageManager = StorageManager;
  window.loadMasteredItems = loadMasteredItems;
  window.saveMastered = saveMastered;
  window.isMastered = isMastered;
  window.getMasteredCount = getMasteredCount;
  window.loadProgress = loadProgress;
  window.saveProgress = saveProgress;
  window.markItemVisited = markItemVisited;
  window.getVisitedCount = getVisitedCount;
  window.saveQuizResult = saveQuizResult;
  window.getQuizStats = getQuizStats;
  window.exportData = exportData;
  window.importData = importData;
  window.clearAllData = clearAllData;
  window.getOverallStats = getOverallStats;
  window.getStudyRecommendations = getStudyRecommendations;
}
