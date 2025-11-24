# HTMLモックデモ - 使い方ガイド

## 🚀 クイックスタート

1. **エントリーポイント**: `index.html` をブラウザで開く
2. **ログイン方法を選択**:
   - 📺 視聴者としてログイン → `login-viewer.html`
   - 🔧 管理者/配信者としてログイン → `login-admin.html`

## 📂 ファイル構成

```
mock-html/
├── index.html                    # エントリーポイント
├── login-viewer.html             # 視聴者ログイン
├── login-admin.html              # 管理者/配信者ログイン
├── common/
│   ├── styles.css                # 共通スタイル
│   ├── app.js                    # 状態管理・タブ切り替え
│   └── modals.js                 # モーダル管理
├── viewer/                       # 視聴者向けページ
│   ├── stream-list.html          # 配信一覧
│   ├── watch-online.html         # オンライン視聴（7ファイル統合）⭐
│   ├── watch-offline.html        # オフライン視聴
│   └── mypage.html               # 視聴者マイページ
├── streamer/                     # 配信者向けページ
│   ├── mypage.html               # 配信者マイページ
│   └── broadcast.html            # 配信画面
└── admin/                        # 管理者向けページ
    ├── monitoring.html           # 配信モニタリング
    ├── event-schedule.html       # イベントスケジュール管理
    ├── ekyc.html                 # eKYC審査
    └── account-admin.html        # アカウント管理
```

## 🎯 主要な機能

### 視聴者フロー
1. `login-viewer.html` → ログイン
2. `viewer/stream-list.html` → 配信一覧
3. `viewer/watch-online.html` → 視聴（状態切り替え機能付き）
   - **before-entry**: 入室前（プロフィール/イベントタブ）
   - **live-room**: 発言ルーム（チャット/秘密メッセージタブ）
   - **peek-room**: のぞきルーム（匿名表示、チャット閲覧のみ）

### 配信者フロー
1. `login-admin.html` → 配信者を選択してログイン
2. `streamer/mypage.html` → ダッシュボード
3. `streamer/broadcast.html` → 配信開始

### 管理者フロー
1. `login-admin.html` → 管理者を選択してログイン
2. `admin/monitoring.html` → リアルタイム配信モニタリング
3. `admin/event-schedule.html` → イベント管理
4. `admin/ekyc.html` → 本人確認審査
5. `admin/account-admin.html` → アカウント管理

## ⭐ 重要: watch-online.html

最も重要なファイル `viewer/watch-online.html` は、**7つの静的HTMLファイルを1つに統合**した動的ページです。

### 統合されたファイル
- `04-1_before_entry_profile.html` → 入室前・プロフィールタブ
- `04-2_before_entry_event.html` → 入室前・イベントタブ
- `04-4_live_room_chat.html` → 発言ルーム・チャットタブ
- `04-5_live_room_secret.html` → 発言ルーム・秘密メッセージタブ
- `04-6_peek_room_chat.html` → のぞきルーム・チャットタブ
- `04-7_peek_room_secret.html` → のぞきルーム・秘密メッセージタブ
- `05_point_charge_modal.html` → ポイントチャージモーダル

### 状態管理の仕組み

```javascript
// app.js による状態管理
AppState.setState('live-room')  // 状態切り替え
AppState.setTab('secret')       // タブ切り替え
```

### data属性による表示制御

```html
<!-- 特定の状態でのみ表示 -->
<div data-show-state="live-room">発言ルーム専用コンテンツ</div>

<!-- 特定のタブでのみ表示 -->
<div data-show-tab="secret">秘密メッセージタブ</div>

<!-- ボタンで状態切り替え -->
<button data-state-button="live-room">発言ルームへ</button>
```

## 🔄 ページ遷移フロー

### 視聴者の典型的なフロー
```
index.html
  → login-viewer.html
    → viewer/stream-list.html
      → viewer/watch-online.html?state=before-entry
        → [発言ルームへボタン] → state=live-room
        → [のぞきルームへボタン] → state=peek-room
          → [発言ルームへボタン] → state=live-room
```

### 配信者の典型的なフロー
```
index.html
  → login-admin.html (配信者選択)
    → streamer/mypage.html
      → streamer/broadcast.html
```

### 管理者の典型的なフロー
```
index.html
  → login-admin.html (管理者選択)
    → admin/monitoring.html
      → admin/event-schedule.html
      → admin/ekyc.html
      → admin/account-admin.html
```

## 🎨 スタイリング

### 共通スタイル (`common/styles.css`)
- ヘッダー、ボタン、モーダル、タブなどの共通コンポーネント
- ユーティリティクラス
- レスポンシブ対応

### ページ固有のスタイル
各HTMLファイルの `<style>` タグ内に定義

## 📝 React実装への示唆

このHTMLモックは、React実装の正しいアーキテクチャパターンを示しています：

### ❌ 間違った実装（現状）
```
watch.$streamerId.before-entry.tsx
watch.$streamerId.live-room.tsx
watch.$streamerId.peek-room.tsx
```

### ✅ 正しい実装（HTMLモックが示すパターン）
```tsx
// watch.$streamerId.tsx - 1ファイルで状態管理
const [viewerState, setViewerState] = useState('before-entry');
const [activeTab, setActiveTab] = useState('profile');

return (
  <>
    {viewerState === 'before-entry' && <BeforeEntryView />}
    {viewerState === 'live-room' && <LiveRoomView />}
    {viewerState === 'peek-room' && <PeekRoomView />}
  </>
);
```

## 🧪 動作確認の手順

1. **基本動作**:
   - `index.html` を開く
   - 視聴者ログインをクリック
   - ゲストとして視聴するをクリック
   - 配信一覧が表示される

2. **状態切り替え**:
   - 配信中の「まりあ」をクリック
   - 入室前画面が表示される
   - 「発言ルーム」ボタンをクリック → 状態が切り替わる
   - 「のぞきルーム」ボタンをクリック → 状態が切り替わる

3. **タブ切り替え**:
   - プロフィール ⇔ イベント開始通知
   - チャット ⇔ 秘密メッセージ

4. **配信者フロー**:
   - `index.html` → 管理者/配信者ログイン
   - 配信者を選択 → 配信者マイページ
   - 配信開始ボタン → 配信画面

5. **管理者フロー**:
   - `index.html` → 管理者/配信者ログイン
   - 管理者を選択 → 配信モニタリング
   - 各管理画面へナビゲーション

## 📊 統計

- **元のファイル数**: 18個の静的HTMLスナップショット
- **統合後のファイル数**: 10個の動的HTMLページ
- **最大統合**: `watch-online.html` (7ファイル → 1ファイル)
- **削減率**: 約44%のファイル削減

## 💡 重要なポイント

1. **1ページ＋状態管理**: 複数の静的ページではなく、1つの動的ページで状態管理
2. **JavaScriptによる制御**: `data-show-state`、`data-show-tab` 属性で表示切り替え
3. **React実装の指針**: このHTMLモックの構造が、正しいReactアーキテクチャを示している
4. **保守性**: ファイル数削減により、保守性と理解しやすさが向上

## 🎓 学習ポイント

このHTMLモックから学べること：
- **状態管理の重要性**: UIの変化は状態の変化として表現すべき
- **コンポーネントの再利用**: 同じUIを異なる状態で再利用
- **段階的な表示制御**: `display: none` で条件分岐レンダリング
- **適切な抽象化**: ページ数 ≠ 状態数
