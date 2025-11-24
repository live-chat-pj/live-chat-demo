/**
 * モーダル管理JavaScript
 * モーダルの表示・非表示、ボタン制御
 */

const ModalManager = {
  /**
   * モーダルを開く
   * @param {string} modalId - モーダルのID
   */
  open(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // スクロールを無効化
    }
  },

  /**
   * モーダルを閉じる
   * @param {string} modalId - モーダルのID
   */
  close(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // スクロールを復元
    }
  },

  /**
   * すべてのモーダルを閉じる
   */
  closeAll() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
};

/**
 * モーダル機能を初期化
 */
function initializeModals() {
  // モーダルを開くボタン
  document.querySelectorAll('[data-modal-open]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.dataset.modalOpen;
      ModalManager.open(modalId);
    });
  });

  // モーダルを閉じるボタン
  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = button.dataset.modalClose;
      if (modalId) {
        ModalManager.close(modalId);
      } else {
        // モーダルIDが指定されていない場合は、親のモーダルを閉じる
        const modal = button.closest('.modal-overlay');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });

  // オーバーレイクリックで閉じる
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      // オーバーレイ自体がクリックされた場合のみ閉じる（モーダル内容のクリックでは閉じない）
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Escキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ModalManager.closeAll();
    }
  });
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', initializeModals);

// グローバルに公開
window.ModalManager = ModalManager;
