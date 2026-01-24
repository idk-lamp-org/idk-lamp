# idk-lamp

AI が **明示的に判断を止める** ためのデザインシグナル。

**idk-lamp** は、AI システムが  
不確実性・文脈不足・責任未定義に直面したときに  
**「決定しない」ことを可視化するための、最小限のシグナル**です。

これは製品ではありません。  
これは意思決定システムではありません。  

**これは境界を示す標識です。**

idk-lamp は **概念（読み物）** であり、  
判断停止の実装は **BOA**（Boundary-Oriented Architecture）側で  
**RCA / RP** として実体化されます。

---

## 何ができるのか

- AI が「わからない」「判断できない」と **明示的に棄権**できる
- 自動判断が停止し、**責任が人間に戻る**ことを示す
- 失敗やエラーではなく、**設計された非決定**を表現する

---

## なぜ必要なのか

現代の AI システムは：

- 常に答えを出すよう最適化されている
- 自然に棄権しない
- 出力が確実性と誤解されやすい

その結果、  
**責任の引き渡しが曖昧なまま判断だけが自動化される**  
という構造的リスクが生まれています。

idk-lamp は、  
その「静かな移行」を止めるために存在します。

詳細: [`docs/why-now.ja.md`](docs/why-now.ja.md)

---

## このリポジトリの構成（Monorepo）

```text
packages/
  idk-lamp/               コア実装・UIシグナル

concepts/
  predictability-gate/    判断可能性の条件（概念）
  ai-human-boundary/      人とAIの境界に関する整理（概念）

specs/
  predictability-gate.yaml
  ai-human-boundary.yaml

docs/
  why-now.ja.md           なぜ今これが必要か
  mapping.ja.md           他フレームワークとの概念対応

Context
このプロジェクトは、AIが判断を止め、
人間の責任へと委ねるべき境界を可視化するための
実践的なシグナルとして設計されています。

idk-lamp（公式サイト）
https://idk-lamp.org/ja

この取り組みは、AI支援システムにおける
設計・責任・境界のあり方を探究する
設計思想 VCDesign から生まれました。

VCDesign
https://vcdesign.org/ja

本リポジトリは単体でも利用・理解できます。
事前知識は必要ありません。
