// ハンドル名設定モーダル

// モーダルHTML生成
function createHandleNameModal() {
    const modalHTML = `
    <!-- ハンドル名設定モーダル -->
    <div class="modal-overlay" id="handleNameModal">
        <div class="handle-modal">
            <div class="handle-modal-header">
                <div class="handle-modal-title">チャット設定</div>
                <button class="handle-close-btn" onclick="closeHandleNameModal()">×</button>
            </div>

            <div class="handle-modal-body">
                <!-- Tabs -->
                <div class="handle-tabs">
                    <button class="handle-tab active" onclick="switchHandleTab(this, 'handle')">ハンドルネーム</button>
                    <button class="handle-tab" onclick="switchHandleTab(this, 'guest')">ゲスト</button>
                </div>

                <!-- Settings Content -->
                <div class="handle-setting-item">
                    <span class="handle-setting-label">メールアドレス</span>
                    <div class="handle-setting-value">
                        <span>設定されていません</span>
                        <a href="#" class="handle-edit-link">編集</a>
                    </div>
                </div>

                <!-- Info Text -->
                <div class="handle-info-text">
                    ご登録いただくメールアドレスは女の子からのメッセージ送信・受信、ウェブサイト更新の告知に利用します。<br>
                    上記以外の目的で使用することはありません。<a href="#">個人情報の保護に関して</a>
                </div>
            </div>

            <div class="handle-modal-footer">
                <button class="handle-btn-close" onclick="closeHandleNameModal()">閉じる</button>
            </div>
        </div>
    </div>
    `;

    return modalHTML;
}

// モーダルスタイル取得
function getHandleNameModalStyles() {
    return `
        /* ハンドル名モーダル */
        .handle-modal {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            max-width: 600px;
            width: 100%;
        }

        .handle-modal-header {
            background: white;
            padding: 1.5rem;
            border-bottom: 1px solid #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .handle-modal-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #111827;
        }

        .handle-close-btn {
            background: transparent;
            border: none;
            color: #6b7280;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem;
            line-height: 1;
            transition: color 0.2s;
        }

        .handle-close-btn:hover {
            color: #111827;
        }

        .handle-modal-body {
            padding: 1.5rem;
        }

        .handle-tabs {
            display: flex;
            gap: 1rem;
            border-bottom: 1px solid #e5e7eb;
            margin-bottom: 1.5rem;
        }

        .handle-tab {
            background: transparent;
            border: none;
            color: #6b7280;
            padding: 0.75rem 1rem;
            cursor: pointer;
            font-weight: 600;
            border-bottom: 2px solid transparent;
            margin-bottom: -1px;
            transition: all 0.2s;
            font-size: 0.875rem;
        }

        .handle-tab.active {
            color: #111827;
            border-bottom-color: #111827;
        }

        .handle-setting-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 0;
            border-bottom: 1px solid #f3f4f6;
        }

        .handle-setting-item:last-child {
            border-bottom: none;
        }

        .handle-setting-label {
            font-size: 0.875rem;
            color: #111827;
            font-weight: 500;
        }

        .handle-setting-value {
            font-size: 0.875rem;
            color: #6b7280;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .handle-edit-link {
            color: #3b82f6;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 600;
            cursor: pointer;
        }

        .handle-edit-link:hover {
            text-decoration: underline;
        }

        .handle-info-text {
            font-size: 0.75rem;
            color: #6b7280;
            line-height: 1.5;
            margin-top: 1rem;
            padding: 0.75rem;
            background: #f9fafb;
            border-radius: 0.25rem;
        }

        .handle-info-text a {
            color: #3b82f6;
            text-decoration: none;
        }

        .handle-info-text a:hover {
            text-decoration: underline;
        }

        .handle-modal-footer {
            padding: 1.5rem;
            background: #f9fafb;
            border-radius: 0 0 0.5rem 0.5rem;
            display: flex;
            justify-content: center;
        }

        .handle-btn-close {
            background: white;
            color: #374151;
            border: 1px solid #d1d5db;
            padding: 0.75rem 2rem;
            border-radius: 0.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.875rem;
        }

        .handle-btn-close:hover {
            background: #f9fafb;
            border-color: #9ca3af;
        }
    `;
}

// モーダル制御
function openHandleNameModal() {
    const modal = document.getElementById('handleNameModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeHandleNameModal() {
    const modal = document.getElementById('handleNameModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// タブ切り替え
function switchHandleTab(element, tabName) {
    document.querySelectorAll('.handle-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', () => {
    // モーダルHTMLを追加
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = createHandleNameModal();
    document.body.appendChild(modalContainer.firstElementChild);

    // モーダル外クリックで閉じる
    const modal = document.getElementById('handleNameModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeHandleNameModal();
            }
        });
    }
});

// グローバル関数として公開
window.openHandleNameModal = openHandleNameModal;
window.closeHandleNameModal = closeHandleNameModal;
window.switchHandleTab = switchHandleTab;
