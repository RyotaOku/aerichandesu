import { CheckboxContent } from "@/types/carrierTypes"

export function getFieldData() {
    const data: CheckboxContent[] = [
        {
            image: '/images/checkIcons/designer.png',
            title: 'デザイナー',
            text: '色と形、ストーリーで世界を変える、クリエイティブな冒険者への旅立ちを。',
            weaken: false
        },
        {
            image: '/images/checkIcons/engineer.png',
            title: 'エンジニア',
            text: 'デジタルの世界を形づくる技術者、技術の探求者への挑戦を。',
            weaken: false
        },
        {
            image: '/images/checkIcons/director.png',
            title: 'ディレクター',
            text: 'ビジョンを現実に変える船乗り、大きな航海の指揮者としての航路を。',
            weaken: false
        },
        {
            image: '/images/checkIcons/allRounder.png',
            title: 'オールラウンダー',
            text: '多才な才能でさまざまなチャレンジを受け止める、ジャンルを超えた冒険者へ。',
            weaken: false
        },
        {
            image: '/images/checkIcons/cat.png',
            title: '決めかねています',
            text: '未知の領域を探る好奇心、あなたの可能性は無限大。一緒に見つけましょう。',
            weaken: true
        },
    ]

    return data
}

export function getSkillData(field: string) {
    const data = {
        designer: [
            {
                image: '/images/checkIcons/uiDesign.png',
                title: 'UIデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/uxDesign.png',
                title: 'UXデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/specs.png',
                title: 'グラフィックデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/print.png',
                title: 'プリントデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/pancakes.png',
                title: 'イラストレーター',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/3dModel.png',
                title: '3Dモデリング',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/motion.png',
                title: 'モーションデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/branding.png',
                title: 'ブランディング・ロゴ',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/movie.png',
                title: '動画編集',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/dog.png',
                title: 'その他',
                text: '',
                weaken: false
            }
        ],
        engineer: [
            {
                image: '/images/checkIcons/static.png',
                title: 'フロントエンド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/back.png',
                title: 'バックエンド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/firmware.png',
                title: 'AI/ML開発',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/server2.png',
                title: 'データベース管理・設計',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/server.png',
                title: 'API開発・管理',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/mobile.png',
                title: 'モバイルアプリ開発',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/visual.png',
                title: 'AR/VR開発',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/video.png',
                title: 'ゲーム開発',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/cloud.png',
                title: 'サーバー・クラウド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/other2.png',
                title: 'その他',
                text: '',
                weaken: false
            }
        ],
        director: [
            {
                image: '/images/checkIcons/map.png',
                title: 'プロジェクトMGMT',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/dropdown.png',
                title: 'コンテンツDr.',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/project2.png',
                title: 'UXディレクション',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/dataReport.png',
                title: 'クリエティブDr.',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/allTheData.png',
                title: 'テクニカルDr.',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/reminder.png',
                title: 'マーケティングDr.',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/project3.png',
                title: 'リサーチ&トレンド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/project.png',
                title: '品質保証・QA Dr.',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/marketing.png',
                title: 'データアナリティクス',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/roadSign.png',
                title: 'その他',
                text: '',
                weaken: false
            }
        ],
        allRounder: [
            {
                image: '/images/checkIcons/static.png',
                title: 'フロントエンド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/back.png',
                title: 'バックエンド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/uiDesign.png',
                title: 'UIデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/server2.png',
                title: 'データベース管理・設計',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/server.png',
                title: 'API開発・管理',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/mobile.png',
                title: 'モバイルアプリ開発',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/map.png',
                title: 'プロジェクトMGMT',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/print.png',
                title: 'プリントデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/cloud.png',
                title: 'サーバー・クラウド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/branding.png',
                title: 'ブランディング・ロゴ',
                text: '',
                weaken: false
            }
        ],
        other: [
            {
                image: '/images/checkIcons/static.png',
                title: '静的なサイト構築',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/front.png',
                title: 'Jsを用いたサイト構築',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/server.png',
                title: 'サーバーとの通信',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/map.png',
                title: 'ディレクション',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/project3.png',
                title: 'リサーチ&トレンド',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/wireframe.png',
                title: 'ワイヤーフレーム構築',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/camp.png',
                title: 'カンプデザイン',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/branding.png',
                title: 'ブランディング・ロゴ',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/motion.png',
                title: 'アニメーション',
                text: '',
                weaken: false
            },
            {
                image: '/images/checkIcons/uiDesign.png',
                title: 'UIデザイン',
                text: '',
                weaken: false
            }
        ]
    }

    // TODO このロジックどうにかしたい

    let key: keyof typeof data;

    switch (field) {
        case 'デザイナー':
            key = 'designer';
            break;
        case 'エンジニア':
            key = 'engineer';
            break;
        case 'ディレクター':
            key = 'director';
            break;
        case 'オールラウンダー':
            key = 'allRounder';
            break;
        case '決めかねています':
            key = 'other';
            break;
        default:
            key = 'other';
    }

    return data[key];
}

export function getQuestionData(userCategory: 'designer' | 'engineer' | 'director' | 'allRounder') {
    const data = {
        general: [
            {
                text: "チーム制作では、役割をきっちりと分けて、それぞれの専門分野にのみ取り組むべきだ。",
                category: "独立性vsチーム作業",
                answer: null,

            },
            {
                text: "事前の厳密な計画を立てるよりも、状況に応じて柔軟に対応すべきである。",
                category: "柔軟性vs計画性",
                answer: null,

            },
            {
                text: "自分は、幅広い知識を持つジェネラリストではなく、一つまたは数つの分野に深く特化するスペシャリストだ。",
                category: "専門知識vs一般知識",
                answer: null,

            },
            {
                text: "リーダーとして前に出るよりも、サポート役として貢献する方だ。",
                category: "フォロワーシップvs指導力",
                answer: null,

            },
            {
                text: "ユーザーのニーズに合わせるよりも、自分のアイデアやスタイルを強く出す。",
                category: "自己主張vsユーザーエクスペリエンス",
                answer: null,

            },
            {
                text: "決断をする前に調査やデータ分析はあまりせず、直感を信じて行動する。",
                category: "直感vs直感",
                answer: null,

            },
            {
                text: "学ぶときには理論を重視するよりも、実際に手を動かして学ぶことを重視する。",
                category: "実践vs理論",
                answer: null,

            },
            {
                text: "新しいことに挑戦して失敗するよりも、確実な方法を選ぶ。",
                category: "安全志向vsリスクを取る",
                answer: null,

            },
            {
                text: "自分がエンジニア・デザイナーのどちらかに振っている時、得意でない分野の知識はほとんど必要ない。",
                category: "チーム内の役割",
                answer: null,

            },
            {
                text: "新しい技術やデザインに積極的に挑戦する方が良い。",
                category: "革新vs伝統",
                answer: null,

            },
            {
                text: "短期間での成果よりも、長期間にわたる計画やビジョンが重要である。",
                category: "即効性vs長期計画",
                answer: null,

            },
            {
                text: "コミュニケーションは、明確で直訳的なものが良い。",
                category: "明確性vs曖昧性",
                answer: null,

            },
            {
                text: "既存の良い方法やツールを用いるよりも、独自の方法で問題を解決すべきだ。",
                category: "オリジナルvsベストプラクティス",
                answer: null,

            },
            {
                text: "完璧な仕上がりを目指すよりも、進捗を重視すべきだ。",
                category: "完璧主義vs進捗",
                answer: null,

            },
            {
                text: "自分が主導してプロジェクトを進める方が良い。",
                category: "主導vs参加",
                answer: null,

            },
            {
                text: "自己認識と独自のスキル開発よりも、チームや外部との協力を重視すべきだ。",
                category: "内省vs外向",
                answer: null,

            },
            {
                text: "問題が起きる前に先手を打つ方が良い。",
                category: "プロアクティブvsリアクティブ",
                answer: null,

            },
            {
                text: "詳細にこだわるよりも、全体の流れや大局を考えるべきだ。",
                category: "詳細vs大局",
                answer: null,

            },
        ],
        designer: [
            {
                text: "デザインは、見た目よりも使いやすさ・機能性が重要だ。",
                category: "形vs機能",
                answer: null,

            },
            {
                text: "インタラクティブなデザイン(アニメーションなど)より静的デザイン",
                category: "静的vs動的",
                answer: null,

            },
            {
                text: "ユーザーのニーズや課題解決を主な目的とするか、芸術的な表現や自己表現を主な目的とするか。",
                category: "ユーザー中心vsアート中心",
                answer: null,

            },
            {
                text: "シンプルさよりも、細部に渡る装飾や要素が重要だ",
                category: "ミニマリズムvs詳細度",
                answer: null,

            },
            {
                text: "UI(見た目・スタイル)設計よりもUX(ユーザー体験・機能)設計が大事だ",
                category: "UIvsUX",
                answer: null,

            },
            {
                text: "固定レイアウトで詳細にこだわるよりも、レスポンシブなデザインにするべきだ。",
                category: "レスポンシブvs固定",
                answer: null,

            },
            {
                text: "静的なデザインに重点を置くよりも、動きのある要素（スクロールアニメーション、ホバーエフェクト等）が重要だ。",
                category: "アニメーションvs静的",
                answer: null,

            },
            {
                text: "既存のテンプレートやフレームワークを使うよりも、一からオリジナルで設計するべきだ。",
                category: "テンプレートvsカスタム",
                answer: null,

            },
            {
                text: "複数のページに分けて情報を整理するよりも、一つのページで全てを表現するスタイルが好ましい。",
                category: "単一ページvsマルチページ",
                answer: null,

            },
            {
                text: "シンプルで直感的なUIよりも、遊び心やユニークな要素を含むUIが好ましい。",
                category: "自然なUIvs遊び心のあるUI",
                answer: null,

            },
            {
                text: "一つのフォントを一貫して使用するよりも、複数のフォントを効果的に組み合わせるべきだ。",
                category: "フォント一種類vsマルチフォント",
                answer: null,

            },
            {
                text: "フラットデザイン（平面的、シンプル）よりも、スケモーフィズム（リアルな質感、立体感）が重要だ。",
                category: "フラットvsスケモーフィズム",
                answer: null,

            },
            {
                text: "プロフェッショナルな写真を使用するよりも、カスタムイラストやアイコンがより効果的だ。",
                category: "写真vsイラスト",
                answer: null,

            },
            {
                text: "短いテキストとシンプルなメッセージが重要か、詳細な情報と長いコピーが必要か。",
                category: "ショートコピーウェブvsロングコピーウェブ",
                answer: null,

            },
            {
                text: "ウェブサイトのテキストには一般的な言葉を使用するよりも、専門用語や業界用語を使用するべきだ。",
                category: "自然言語vs専門用語",
                answer: null,

            }
        ],
        engineer: [
            {
                text: "バックエンド（サーバー、データベース）よりも、フロントエンド（UI/UX）に焦点を当てるべきだ。",
                category: "フロントエンドvsバックエンド",
                answer: null,

            },
            {
                text: "動的な型付け（例:JavaScript, Python）よりも、型が厳格に定義されている言語（例:TypeScript, Java）が好ましい。",
                category: "強型vs弱型",
                answer: null,

            },
            {
                text: "エンジニアは、デザインの知識はデザイナーに任せ、自分の専門分野に注力すべきだ。",
                category: "専門性vs幅広く",
                answer: null,

            },
            {
                text: "複数の部分が連携して動作する場面でのテストよりも、主に小さな単位（関数、メソッド）でのテストに重点を置くべきだ。",
                category: "単体テストvs統合テスト",
                answer: null,

            },
            {
                text: "プロトタイピング（詳細なデザイン、インタラクション）よりも、初期段階でのワイヤーフレームに重点を置くべきだ。",
                category: "ワイヤーフレームvsプロトタイピング",
                answer: null,

            },
            {
                text: "見た目（デザイン、エフェクト）よりも、パフォーマンス（速度、効率）に重点を置くべきだ。",
                category: "パフォーマンスvs見た目",
                answer: null,

            },
            {
                text: "デスクトップファーストのデザインよりも、モバイルファーストでデザインを考えるべきだ。",
                category: "モバイルファーストvsデスクトップファースト",
                answer: null,

            },
            {
                text: "特定の機能に特化したライブラリ（例:lodash, axios）よりも、大規模なフレームワーク（例:React, Angular）を使用するべきだ。",
                category: "フレームワークvsライブラリ",
                answer: null,

            },
            {
                text: "CSS/SASS/LESSのような伝統的なスタイリングよりも、CSS-in-JSライブラリ（例:styled-components）を使用するべきだ。",
                category: "CSS in JSvs伝統的なスタイリング",
                answer: null,

            },
            {
                text: "フレームワーク（Bootstrap、Tailwindなど）を使うよりも、手書きでCSSを作成するべきだ。",
                category: "手書きCSSvsフレームワーク",
                answer: null,

            },
            {
                text: "特定のデバイスや画面サイズに最適化されたデザインよりも、レスポンシブデザインを重視するべきだ。",
                category: "レスポンシブvs非レスポンシブ",
                answer: null,

            },
            {
                text: "マルチページアプリケーション（MPA）の開発よりも、シングルページアプリケーション（SPA）の開発に興味がある。",
                category: "SPAvsMPA",
                answer: null,

            }
        ],
        director: [
            {
                text: "プロジェクトの細かな部分に深く関与するよりも、大局的な視点でプロジェクトを管理するべきだ。",
                category: "マイクロマネージメントvsマクロマネージメント",
                answer: null,

            },
            {
                text: "単に制作物を完成させることよりも、ビジネス戦略と連動させたプロジェクト管理をするべきだ。",
                category: "制作vs戦略",
                answer: null,

            },
            {
                text: "アジャイルな開発手法（例：スクラム）を用いるより、伝統的なウォーターフォールモデルを用いるべきだ。",
                category: "スクラムvsウォーターフォール",
                answer: null,

            },
            {
                text: "ユーザーエクスペリエンスを最優先するより、ビジネスのKPI（重要業績評価指標）に重点を置くべきだ。",
                category: "UXvsビジネスKPI",
                answer: null,

            },
            {
                text: "チームメンバーとの一対一の対話を重視するよりも、チーム全体とのコミュニケーションに焦点を当てるべきだ。",
                category: "一対一のコミュニケーションvsチーム内コミュニケーション",
                answer: null,

            },
            {
                text: "決定を下す際にデータと分析に依存するべきで、直感や経験は優先しないべきだ。",
                category: "データ駆動vs直感駆動",
                answer: null,

            },
            {
                text: "プロジェクトでクリエイティブな側面（デザイン、内容等）よりも、ロジスティック（スケジュール、予算、リソース）に重点を置く。",
                category: "クリエイティブvsロジスティック",
                answer: null,

            },
            {
                text: "短期的なプロジェクトよりも、長期的なビジョンを持つプロジェクトの方が自分に合っている。",
                category: "短期vs長期プロジェクト",
                answer: null,

            },
            {
                text: "決断においてリーダーシップを強く発揮するよりも、チーム全体のコンセンサスを取るスタイルが好ましい。",
                category: "リーダーシップvsコンセンサス",
                answer: null,

            },
            {
                text: "柔軟に対応するスタイルよりも、明確なプロトコルとガイドラインに従うスタイルが好ましい。",
                category: "柔軟性vsプロトコル",
                answer: null,

            },
            {
                text: "高品質な仕上がりを最優先すべきで、効率と速度は犠牲になっても仕方がない。",
                category: "クオリティvs速度",
                answer: null,

            },
            {
                text: "手作業で細部まで確認せず、タスクやプロセスをできるだけ自動化する。",
                category: "自動化vs手作業",
                answer: null,

            },
            {
                text: "チームが同じ場所で働くことにこだわらず、リモートワークや分散チームでも効果的にマネージメントできる。",
                category: "ローカルvsリモートマネージメント",
                answer: null,

            }

        ],
        allRounder: [
            {
                text: "デザインのコンセプトやビジュアルアイデアよりも、具体的な実装スキルに重きを置くべきだ。",
                category: "コンセプトvs実装",
                answer: null,

            },
            {
                text: "フロントエンド（HTML, CSS, JavaScript）に集中するよりも、バックエンド（サーバーサイド、データベース）にも手を出すべきだ。",
                category: "フロントエンドvsバックエンド",
                answer: null,

            },
            {
                text: "ユーザビリティ（使いやすさ、アクセシビリティなど）を優先するべきで、ビジュアルデザインとエステティックは二の次であるべきだ。",
                category: "ユーザビリティvsエステティック",
                answer: null,

            },
            {
                text: "単独で効率よく作業を進めるよりも、チームで協力してプロジェクトを進めるべきだ。",
                category: "単独作業vsチーム作業",
                answer: null,

            },
            {
                text: "速いペースで仕事をこなすよりも、少し時間をかけてでも品質を確保するべきだ。",
                category: "速度vs品質",
                answer: null,

            },
            {
                text: "多くの異なるスキルセット（例：UIデザイン, UXデザイン, プログラミング, グラフィックデザインなど）を持つよりも、特定のエリアで非常に専門的なスキルを持つべきだ。",
                category: "広範vs深掘り",
                answer: null,

            },
            {
                text: "トレンドを追いかけるよりも、定番のデザインやテクニックに焦点を当てるべきだ。",
                category: "トレンドvs定番",
                answer: null,

            },
            {
                text: "顧客の要望を可能な限り尊重するよりも、プロフェッショナルな判断で設計するべきだ。",
                category: "顧客要望vsプロフェッショナルな判断",
                answer: null,

            },
            {
                text: "既存のフレームワークを使うよりも、カスタムコードを書いて特定のニーズに対応するべきだ。",
                category: "フレームワーク使用vsカスタムコード",
                answer: null,

            },
            {
                text: "プロトタイプを速く作成してフィードバックを集めるよりも、初めから完全な仕上がりを目指すべきだ。",
                category: "プロトタイピングvs完全仕上げ",
                answer: null,

            },
            {
                text: "多くの機能を提供するよりも、シンプルで使いやすいインターフェースにするべきだ。",
                category: "多機能vsシンプル",
                answer: null,

            }
        ],
    }

    // generalの質問をランダムに3つ選ぶ
    const generalQuestions = data.general.sort(() => 0.5 - Math.random()).slice(0, 3);

    // ユーザーの選択したカテゴリーに関連する質問をランダムに7つ選ぶ
    const specificQuestions = data[userCategory].sort(() => 0.5 - Math.random()).slice(0, 7);

    // 2つの配列を結合する
    const selectedQuestions = [...generalQuestions, ...specificQuestions];

    return selectedQuestions;
}

export function getResultData() {
    // const

    return
}