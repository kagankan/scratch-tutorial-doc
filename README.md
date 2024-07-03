# scratch-tutorial-doc

## このリポジトリについて

Scratchを使用した小学生向けプログラミング教室のプリント。

公開用のPDFは[distディレクトリ](./dist)に格納しています。

## リポジトリ概要

- Markdown形式で資料を作成。
  - 作業中はVisual Studio Code上でプレビュー。
- PDF出力を `md-to-pdf` (npm package) で行う

### 備考

`markdown-pdf` (VSCode拡張) でのPDF出力を試したが、divタグによるクラス指定がうまくいかないなど、不都合が多かった。

## 気づきなどメモ

- 「プリントのそのまま写経」ができるようになっても、思考のプロセスを教えないと「自分の頭で考える」ことができない。できているように見えて、できるようにはなっていない
  - コピーするだけになってしまい、頭を使っていない。
  - 自分の頭で考えられるようになる必要がある。
- 小学生と一口に言っても、個人・集団によってぜんぜん違う
  - ある学年は好き勝手にどんどん進めていくが、別の学年ではテキスト以外に自分で考えて進めることが苦手だったりする。
- プログラミングのことばかりに目が行ってしまうが、実際には「キーボード入力」や「ファイル保存」で詰まることが多い。
- スタッフ（教える側の大人）1人に対して、児童は4人程度が限度。
  - 児童の質問に対応しながら進める場合。
  - もちろんながら、進め方の工夫によっても変わる。
    - 早く進んでいる児童に教える側に回ってもらったりなど。
- iPad & オンラインエディターを使用して行う場合の注意
  - QRコードから開くと、Safariではなくアプリ内ブラウザで開いてしまう場合がある。その場合、保存ができない（できたように見えて、ファイルを確認するとできていない）。必ずSafari（などのブラウザアプリ）から開く必要がある。
  - ブラウザバック時に警告が出ないため、間違えてブラウザバックすると一瞬で消える。こまめな保存が肝心。
  - 音楽が再生されない場合があるが、Safariを再起動すると治ることがある。

## 関連資料

### Scratch

https://scratch.mit.edu/

求めている機能のissueは立っているが、すでに3年放置されているあたり、もはやScratchは更新される気配がない・・・
https://github.com/LLK/scratch-blocks/issues/1857

### プログラミング教育
#### Why!? プログラミング
https://www.nhk.or.jp/school/sougou/programming/

NHKで放送している、Scratchを用いたプログラミング教育番組。

#### テキシコー
https://www.nhk.or.jp/school/sougou/texico/
プログラミング的思考を育てる番組

1. 分解：小さく分けて考える
2. 組み合わせ：手順の組み合わせを考える
3. 一般化：パターンを見つける
4. 抽象化：大事なものだけ抜き出して考える
5. シミュレーション：頭の中で手順をたどる

#### CS First
Googleが公開している、日本の小学校向けプログラミングカリキュラム。

https://diamond.jp/articles/-/303438
https://csfirst.withgoogle.com/s/ja/home


https://news.mynavi.jp/techplus/article/20220302-2282478/

[第一回プログラミング教育について話し合う会 - connpass](https://opt.connpass.com/event/240392/)
2022年3月に開催された「第一回プログラミング教育について話し合う会」。
発表された方の資料が公開されていたり、Togetterに当日のツイートの様子がまとめられていたりする。

第二回もやってた
https://tech-magazine.opt.ne.jp/entry/2022/08/05/162655

[特定非営利活動法人みんなのコード](https://code.or.jp/)
公教育（＝塾などではなく、小学校や中学校）のプログラミング教育を推進する活動を行っている団体。

https://qiita.com/tomo_makes/items/c193d4fc89e6eb4a245d

#### 大学入試センター 情報の試験

https://www.dnc.ac.jp/kyotsu/shiken_jouhou/r7ikou.html

### プログラミングツール

https://tool-zukan.com/
https://www.irobot-jp.com/root/
https://toio.io/
https://www.nintendo.co.jp/switch/awuxa/
https://meshprj.com/jp/


https://www.nec-lavie.jp/kids/programming/contents/basic/gamelist.html

https://kidsc2.org/recipes
