# Hack your own way
このチャレンジは、[ポートフォリオ（プロフィール）アプリを作ろう](https://app.code-check.io/orgs/codecheck_official/challenges/74) を解いている事が前提です。

## STEP1. 下の選択肢の中から実装する機能を選んで実装しよう！
下に実装必須の機能を含めて **7つの選択肢** を用意してあります。  
その7つのうち、 **必須機能を含めて最低でも2つの機能を実装してください** ！

このチャレンジにはテストはありません！  
自分の作れそうな機能の実装をどんどんトライして、スキルや挑戦心をアピールしていきましょう！  
「自分でテストコードを追加してみたよ」なんてのも大歓迎です ;)

また、[answer.md](answer.md) に実装した内容を記入して、コードからは見えづらい自分の工夫した点、苦戦した点なども書いていきましょう！

Reviewer は **まずこの[answer.md](answer.md)から見ます** ！！  
「ここも実装したんだけど見て貰えなかった……」とならないようにしっかりとアピールしましょう！

### [必須]：クライアントサイドの実装
今回はバックエンドの API のみが課題となっていましたが、ポートフォリオにクライアントサイドの実装は必須です。  
自分でデザインを考えるもよし。  
かっこいいテンプレートを探して適用するもよし。  
デザインに力を入れずに Angular や React といったフレームワークに挑戦するもよし。  
クライアントサイドは最低限にして、サーバー側の実装に集中するもよしです！  

### [選択]：ページネーションの実装
`GET /api/projects` の API はオフセットや取得データの上限数といった内容を定義していません。  
ページネーションを実装し、またその設計をした背景などを [answer.md](answer.md) に記入しましょう！

### [選択]： バリデーションの実装
基本の API の定義では不正な文字が入っていた場合の対処やエラーメッセージについて考慮されていません。  
バリデーションを追加したり、どの様にエラーを返すかを設計・実装しましょう！

### [選択]： 画像のアップロード
今のデータ追加の API (`POST /api/projects`)は画像を取り扱わない仕様になっています。  
今の API を拡張したり、別のAPIを追加するなりして画像を扱えるようにして、その方法などを [answer.md](answer.md) でアピールしましょう！

### [選択]： タグ機能
プロジェクトや作品の数が増えた場合、プロジェクトを整理できる機能が必要になってくるかもしれません。  
「タグ」の概念を追加し、ソートやフィルタリングができるように拡張してみましょう！

### [選択]： 外部 API 連携
外部のサービスと連携する事でポートフォリオの管理がもっと楽になるかもしれません。  
GitHub からプロジェクトのインポート、 slack からポートフォリオの簡易的な管理などなど！

### [選択]： その他オリジナルアイディア
上に載っていないような機能でも、もっと魅力的だと思えるものもあるかと思います。  
そんなアイディアを思いついたらまずは [answer.md](answer.md) に書いてみましょう。そしてそれが実装できるか挑戦してみてください！

## STEP2. Herokuにアプリケーションをデプロイしよう
出来上がったアプリケーションを、[ポートフォリオ（プロフィール）アプリを作ろう](https://app.code-check.io/orgs/codecheck_official/challenges/74)と同様に、Herokuにデプロイしてみましょう。    
デプロイが完了したら、[answer.md](answer.md)に、デプロイ先のURLを記入して、Reviewer が確認できるようにしておきましょう！

## STEP3. answer.mdを完成させよう
コンテストページ内にある、Reviewerからの審査基準、[How to Get LGTM](https://sprint.code-check.io/details.html)をよく読んで、自分のオリジナリティを[answer.md](answer.md)に記入してアピールしましょう！  
これで、今回のチャレンジは全て終了です。期限内にcodecheck上から提出をしてください。

## 量で攻めるか質で攻めるか？
このチャレンジの目的は各スポンサーの審査員から LGTM を集める事です！
各スポンサーがどのような審査基準を持っているかは[イベントのページ](https://sprint.code-check.io/details.html#lgtm)から確認できるので是非確認しておきましょう！

**沢山の機能を追加して**全体からの LGTM を集めるのか？  
機能を絞る代わりに質を高めて**ピンポイントでスポンサーを狙いに行く**のか？  
提出期限内であれば、何度でもやり直しが可能です。是非、時間いっぱい自分の力をアピールしてみましょう！

# 皆さんの挑戦をお待ちしています！