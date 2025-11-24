// ヘッダーコンポーネント
class ViewerHeader {
    constructor(options = {}) {
        this.title = options.title || 'ライブ配信一覧';
        this.points = options.points || '5,280';
        this.notificationCount = options.notificationCount || 3;
        this.showBackButton = options.showBackButton || false;
        this.backUrl = options.backUrl || 'stream-list.html';
        this.backText = options.backText || '配信一覧へ';
        this.backOnClick = options.backOnClick || null;
    }

    getHeaderHTML() {
        const backButtonClick = this.backOnClick ? `onclick="${this.backOnClick}; return false;"` : '';
        return `
    <!-- Header -->
    <div class="header">
        <div class="header-content">
            ${this.showBackButton ? `
            <div class="header-left">
                <h1>
                    <span>📺</span>
                    ${this.title}
                </h1>
                <a href="${this.backUrl}" class="back-btn" ${backButtonClick}>${this.backText}</a>
            </div>
            <div class="header-actions">
                <button class="header-btn" onclick="openPointModal()">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                    ポイントチャージ
                </button>
                <div class="points-display">
                    <span>💰</span>
                    <span>残ポイント: <strong>${this.points} pt</strong></span>
                </div>
                <button class="header-btn" onclick="location.href='mypage.html'">
                    お気に入り
                </button>
                <button class="icon-btn" title="通知" onclick="location.href='notifications.html'">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    ${this.notificationCount > 0 ? `<span class="notification-badge">${this.notificationCount}</span>` : ''}
                </button>
                <button class="icon-btn" title="マイページ" onclick="location.href='mypage.html'">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            ` : `
            <h1 style="cursor: pointer;" onclick="location.href='stream-list.html'">
                <span>📺</span>
                ${this.title}
            </h1>
            <div class="header-actions">
                <button class="header-btn" onclick="openPointModal()">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1 a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                    ポイントチャージ
                </button>
                <div class="points-display">
                    <span>💰</span>
                    <span>残ポイント: <strong>${this.points} pt</strong></span>
                </div>
                <button class="header-btn" onclick="location.href='mypage.html'">
                    お気に入り
                </button>
                <button class="icon-btn" title="通知" onclick="location.href='notifications.html'">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    ${this.notificationCount > 0 ? `<span class="notification-badge">${this.notificationCount}</span>` : ''}
                </button>
                <button class="icon-btn" title="マイページ" onclick="location.href='mypage.html'">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            `}
        </div>
    </div>
        `;
    }

    getHeaderStyles() {
        return `
        .header {
            background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
            color: #831843;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
        }

        .header-content {
            max-width: 1600px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .back-btn {
            background: white;
            color: #9f1239;
            padding: 0.5rem 1rem;
            border: 1px solid #f9a8d4;
            text-decoration: none;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s;
            cursor: pointer;
            border-radius: 0.25rem;
        }

        .back-btn:hover {
            background: #fdf2f8;
            border-color: #ec4899;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .header-btn {
            background: white;
            color: #9f1239;
            padding: 0.5rem 1rem;
            border: 1px solid #f9a8d4;
            text-decoration: none;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s;
            cursor: pointer;
        }

        .header-btn:hover {
            background: #fdf2f8;
            border-color: #ec4899;
        }

        .icon-btn {
            background: white;
            color: #9f1239;
            width: 2.5rem;
            height: 2.5rem;
            border: 1px solid #f9a8d4;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            cursor: pointer;
            position: relative;
        }

        .icon-btn:hover {
            background: #fdf2f8;
            border-color: #ec4899;
        }

        .notification-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            background: #ef4444;
            color: white;
            font-size: 0.625rem;
            padding: 0.125rem 0.375rem;
            border-radius: 9999px;
            font-weight: 700;
        }

        .points-display {
            background: transparent;
            color: #831843;
            padding: 0.5rem 1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .header h1 {
            font-size: 1.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        `;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.getHeaderHTML();
        }
    }
}

// グローバルに公開
window.ViewerHeader = ViewerHeader;

// DOMContentLoaded時に自動レンダリング
document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('viewer-header');
    if (headerContainer && window.headerConfig) {
        const header = new ViewerHeader(window.headerConfig);
        header.render('viewer-header');
    }
});
