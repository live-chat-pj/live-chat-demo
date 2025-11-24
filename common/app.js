/**
 * アプリケーション共通JavaScript
 * 状態管理、タブ切り替え、画面遷移などの共通機能
 */

// 状態管理
const AppState = {
  currentPage: null,
  currentState: null,
  currentTab: null,

  /**
   * ページの状態を設定
   * @param {string} state - 状態名（例: 'before-entry', 'live-room', 'peek-room'）
   */
  setState(state) {
    this.currentState = state;
    document.body.setAttribute('data-state', state);
    this.updateUI();
  },

  /**
   * タブを設定
   * @param {string} tab - タブ名（例: 'profile', 'event', 'chat', 'secret'）
   */
  setTab(tab) {
    this.currentTab = tab;
    document.body.setAttribute('data-tab', tab);
    this.updateUI();
  },

  /**
   * UIを状態とタブに基づいて更新
   */
  updateUI() {
    const state = this.currentState;
    const tab = this.currentTab;

    // すべての状態とタブのコンテンツを非表示
    document.querySelectorAll('[data-show-state]').forEach(el => {
      el.style.display = 'none';
    });

    document.querySelectorAll('[data-show-tab]').forEach(el => {
      el.style.display = 'none';
    });

    // 現在の状態とタブに該当するコンテンツを表示
    if (state) {
      document.querySelectorAll(`[data-show-state="${state}"]`).forEach(el => {
        el.style.display = '';
      });
    }

    if (tab) {
      document.querySelectorAll(`[data-show-tab="${tab}"]`).forEach(el => {
        el.style.display = '';
      });
    }

    // タブボタンのアクティブ状態を更新
    document.querySelectorAll('[data-tab-button]').forEach(btn => {
      if (btn.dataset.tabButton === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 状態ボタンのアクティブ状態を更新
    document.querySelectorAll('[data-state-button]').forEach(btn => {
      if (btn.dataset.stateButton === state) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
};

// タブ切り替え機能
function initializeTabs() {
  document.querySelectorAll('[data-tab-button]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = button.dataset.tabButton;
      AppState.setTab(tab);
    });
  });
}

// 状態切り替え機能
function initializeStateButtons() {
  document.querySelectorAll('[data-state-button]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const state = button.dataset.stateButton;
      AppState.setState(state);
    });
  });
}

// ページ初期化
function initializePage() {
  // data-initial-state属性から初期状態を取得
  const initialState = document.body.dataset.initialState;
  if (initialState) {
    AppState.setState(initialState);
  }

  // data-initial-tab属性から初期タブを取得
  const initialTab = document.body.dataset.initialTab;
  if (initialTab) {
    AppState.setTab(initialTab);
  }

  // タブと状態ボタンを初期化
  initializeTabs();
  initializeStateButtons();
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', initializePage);
