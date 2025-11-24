// ポイントチャージモーダル

// モーダルHTML生成
function createPointModal() {
    const modalHTML = `
    <!-- ポイントチャージモーダル -->
    <div class="modal-overlay" id="pointModal">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                    ポイントチャージ
                </div>
                <button class="close-btn" onclick="closePointModal()">×</button>
            </div>

            <div class="modal-body">
                <!-- Current Points -->
                <div class="current-points">
                    <span class="current-points-label">現在の保有ポイント</span>
                    <span class="current-points-value">5,280 pt</span>
                </div>

                <!-- Plan Selection -->
                <div class="plan-label">チャージプランを選択</div>
                <div class="plan-grid">
                    <div class="plan-card" onclick="selectPlan(this)">
                        <div class="plan-points">1,000 pt</div>
                        <div class="plan-price">¥1,000</div>
                    </div>
                    <div class="plan-card" onclick="selectPlan(this)">
                        <div class="plan-points">3,000 pt</div>
                        <div class="plan-price">¥3,000</div>
                    </div>
                    <div class="plan-card selected" onclick="selectPlan(this)">
                        <div class="plan-points">5,000 pt</div>
                        <div class="plan-price">¥5,000</div>
                        <span class="plan-bonus">+500pt</span>
                    </div>
                    <div class="plan-card" onclick="selectPlan(this)">
                        <div class="plan-points">10,000 pt</div>
                        <div class="plan-price">¥10,000</div>
                        <span class="plan-bonus">+1,500pt</span>
                    </div>
                    <div class="plan-card" onclick="selectPlan(this)">
                        <div class="plan-points">30,000 pt</div>
                        <div class="plan-price">¥30,000</div>
                        <span class="plan-bonus">+5,000pt</span>
                    </div>
                    <div class="plan-card" onclick="selectPlan(this)">
                        <div class="plan-points">50,000 pt</div>
                        <div class="plan-price">¥50,000</div>
                        <span class="plan-bonus">+10,000pt</span>
                    </div>
                </div>

                <!-- Payment Method -->
                <div class="payment-section">
                    <div class="plan-label">お支払い方法</div>
                    <div class="payment-method" style="cursor: default;">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                        </svg>
                        クレジットカード
                    </div>
                </div>

                <div class="note">
                    ※ ボーナスポイントは購入時に自動付与されます<br>
                    ※ ポイントの有効期限は購入日より180日間です<br>
                    ※ 購入したポイントの返金はできません
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-cancel" onclick="closePointModal()">キャンセル</button>
                <button class="btn btn-primary" onclick="chargePoints()">チャージする</button>
            </div>
        </div>
    </div>
    `;

    return modalHTML;
}

// モーダルスタイル取得
function getPointModalStyles() {
    return `
        /* モーダル */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .modal-overlay.active {
            display: flex;
        }

        .modal {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            max-width: 500px;
            width: 100%;
        }

        .modal-header {
            background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
            padding: 1.5rem;
            border-radius: 0.5rem 0.5rem 0 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .modal-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #831843;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .close-btn {
            background: transparent;
            border: none;
            color: #9f1239;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem;
            line-height: 1;
            transition: color 0.2s;
        }

        .close-btn:hover {
            color: #831843;
        }

        .modal-body {
            padding: 1.5rem;
        }

        .current-points {
            background: #fef3c7;
            border: 1px solid #fde047;
            padding: 1rem;
            border-radius: 0.25rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .current-points-label {
            font-size: 0.875rem;
            color: #854d0e;
            font-weight: 600;
        }

        .current-points-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #854d0e;
        }

        .plan-label {
            font-size: 0.875rem;
            color: #6b7280;
            font-weight: 600;
            margin-bottom: 0.75rem;
        }

        .plan-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }

        .plan-card {
            background: white;
            border: 2px solid #e5e7eb;
            padding: 1rem;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }

        .plan-card:hover {
            border-color: #ec4899;
            background: #fdf2f8;
        }

        .plan-card.selected {
            border-color: #ec4899;
            background: #fce7f3;
        }

        .plan-points {
            font-size: 1.25rem;
            font-weight: 700;
            color: #ec4899;
            margin-bottom: 0.25rem;
        }

        .plan-price {
            font-size: 0.875rem;
            color: #6b7280;
        }

        .plan-bonus {
            background: #fbbf24;
            color: white;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            margin-top: 0.5rem;
            display: inline-block;
            font-weight: 600;
        }

        .payment-section {
            margin-bottom: 1.5rem;
        }

        .payment-method {
            background: white;
            border: 2px solid #8b5cf6;
            padding: 1rem;
            border-radius: 0.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-weight: 600;
            color: #374151;
            background: #ede9fe;
        }

        .modal-footer {
            padding: 1.5rem;
            background: #f9fafb;
            border-radius: 0 0 0.5rem 0.5rem;
            display: flex;
            gap: 0.75rem;
        }

        .btn {
            flex: 1;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 0.25rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 1rem;
        }

        .btn-cancel {
            background: white;
            color: #6b7280;
            border: 1px solid #d1d5db;
        }

        .btn-cancel:hover {
            background: #f9fafb;
            border-color: #9ca3af;
        }

        .btn-primary {
            background: #ec4899;
            color: white;
        }

        .btn-primary:hover {
            background: #db2777;
        }

        .btn-primary:disabled {
            background: #d1d5db;
            color: #9ca3af;
            cursor: not-allowed;
        }

        .note {
            font-size: 0.75rem;
            color: #6b7280;
            margin-top: 1rem;
            line-height: 1.5;
        }
    `;
}

// モーダル制御
function openPointModal() {
    const modal = document.getElementById('pointModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closePointModal() {
    const modal = document.getElementById('pointModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// プラン選択
function selectPlan(element) {
    document.querySelectorAll('.plan-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
}

// チャージ処理
function chargePoints() {
    alert('ポイントチャージ機能は準備中です');
    closePointModal();
}

// DOMContentLoaded時に初期化
document.addEventListener('DOMContentLoaded', () => {
    // モーダルHTMLを追加
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = createPointModal();
    document.body.appendChild(modalContainer.firstElementChild);

    // モーダル外クリックで閉じる
    const modal = document.getElementById('pointModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePointModal();
            }
        });
    }
});

// グローバル関数として公開
window.openPointModal = openPointModal;
window.closePointModal = closePointModal;
window.selectPlan = selectPlan;
window.chargePoints = chargePoints;
