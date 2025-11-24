# Mock HTML 実装進捗

## ✅ 完了したページ

### 視聴者（Viewer）画面
- ✅ `viewer/stream-list.html` - 配信一覧ページ（ランキング、配信者カード）
- ✅ `viewer/watch-offline.html` - さくらの入室前ページ（オフライン）
- ✅ `viewer/watch-online.html` - まりあの視聴ページ（配信中）
  - 入室前画面: プロフィール、バナー、発言/のぞきルームボタン
  - 発言ルーム: チャット/秘密メッセージタブ、メッセージ送信可能
  - のぞきルーム: 匿名チャット（****）、メッセージ送信不可、発言ルームへ切り替え
  - 状態管理: `before-entry` | `live-room` | `peek-room`

### 配信者（Streamer）画面
- ✅ `streamer/mypage.html` - 配信者マイページ
  - プロフィールカード（アバター、統計情報）
  - プロフィール設定フォーム（配信者名、年齢、趣味、特技、自己紹介、SNS）
  - 配信スケジュール管理（今後の配信予定）
- ✅ `streamer/broadcast.html` - 配信画面
  - 配信開始/終了ボタン
  - 状態管理: オフライン ⇄ 配信中
  - 視聴者数表示（発言ルーム、のぞきルーム）
  - チャット表示（通常メッセージ、秘密メッセージ）
  - 配信情報パネル（視聴者数、配信時間、収益）

### 管理者（Admin）画面
- ✅ `admin/monitoring.html` - 配信モニタリング
  - 配信統計（現在の配信数、総視聴者数、今日の配信時間、収益）
  - 配信一覧（3x1グリッド、各配信の詳細情報）
  - 視聴/停止ボタン
- ✅ `admin/account-admin.html` - アカウント管理
  - タブ切り替え（全アカウント、視聴者、配信者）
  - アカウント一覧テーブル
  - 検索バー
  - 役割バッジ表示
- ✅ `admin/ekyc.html` - eKYC審査
  - 審査待ち申請一覧
  - 承認/却下ボタン
- ✅ `admin/event-schedule.html` - イベントスケジュール管理
  - イベント一覧
  - 編集/削除ボタン

### 共通コンポーネント
- ✅ `common/styles.css` - 共通スタイルシート
- ✅ `common/app.js` - 共通JavaScript
- ✅ `common/modals.js` - モーダル管理
- ✅ `common/handle-name-modal.js` - ハンドル名設定モーダル
- ✅ `common/point-modal.js` - ポイント購入モーダル

### ログイン画面
- ✅ `login-viewer.html` - 視聴者ログイン
- ✅ `login-admin.html` - 管理者ログイン
- ✅ `index.html` - トップページ（視聴者/管理者選択）

## 技術メモ

### 状態管理パターン
- **視聴者画面**: `roomState` 変数で画面状態を管理（`before-entry` | `live-room` | `peek-room`）
- **配信者画面**: `broadcasting` フラグで配信状態を管理（オフライン ⇄ 配信中）
- **管理者画面**: タブフィルタリングで表示切り替え（`data-role` 属性で判定）
- `updateHeaderButton()` でヘッダーボタンを動的更新
- `display: 'none'` / `display: 'flex'` で表示切り替え

### 画像パス
- 画像は `../../../images/live-chat/モック画面/` に配置
- 相対パスは各HTMLファイルからの階層に応じて調整
- 配信者アバター: `actress/actress_01.png`, `actress_02.png`, `actress_03.png`

### 共通スタイル
- **ピンクグラデーション**: `linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)`
- **メインカラー**: `#ec4899` (pink-500)
- **ボタンホバー**: `#db2777` (pink-600)
- **配信中バッジ**: `#ec4899` + 点滅ドット
- **オフラインバッジ**: `#6b7280`

### ナビゲーション
- **視聴者**: 配信一覧 → 入室前 → 発言/のぞきルーム
- **配信者**: マイページ ⇄ 配信画面
- **管理者**: 配信モニタリング ⇄ アカウント管理 ⇄ eKYC審査 ⇄ イベントスケジュール

### サンプルデータ
- **配信者**: まりあ、さくら、あやね
- **視聴者**: ゆうた、けんじ、たかし、ひろし、まさる
- **ポイント**: 200pt/分、秘密メッセージ200pt/通

## 参考ファイル
- `static-html/` - 元のHTMLモック（参考用）
- `mock-html-integration-plan.md` - 統合計画書

## 次のステップ
このモックHTMLを参考に、React Router v7で本番実装を行います：
1. `.kiro/specs/viewer-flow/` の仕様書に従って実装
2. バックエンドAPIと接続
3. WebSocketでリアルタイム機能を実装
