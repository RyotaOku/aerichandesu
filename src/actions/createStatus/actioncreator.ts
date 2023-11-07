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
                resultText: {
                    neutral: "あなたは独立性とチーム作業の中間に立ちます。この姿勢は、特定の専門分野にフォーカスする一方で、必要に応じてチームと連携するスキルを持っています。",
                    left: "あなたは役割の明確な分担と専門性を重視しています。このスタンスは高度なスキルと知識を活かせますが、跨業種や多機能のプロジェクトには柔軟性が求められる場合もあります。",
                    right: "あなたはチーム内での多角的な役割を重視しています。このアプローチは多様な問題に対応できる柔軟性を持ちますが、専門性を深めるのが難しくなる可能性があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "事前の厳密な計画を立てるよりも、状況に応じて柔軟に対応すべきである。",
                category: "柔軟性vs計画性",
                answer: null,
                resultText: {
                    neutral: "あなたは計画性と柔軟性のバランスをうまく取ることができます。計画をしっかりと立てつつ、不測の事態や新たな情報に柔軟に対応できる能力があります。",
                    left: "あなたは柔軟性を重視しています。このアプローチは変化に強く、多くの状況で適応できますが、方向性が不明確になる可能性もあります。",
                    right: "あなたは事前に厳密な計画を立てることを重視しています。このスタイルはタスクを効率的に進めることができますが、計画外の出来事に対応するのが難しくなる可能性があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "自分は、幅広い知識を持つジェネラリストではなく、一つまたは数つの分野に深く特化するスペシャリストだ。",
                category: "専門知識vs一般知識",
                answer: null,
                resultText: {
                    neutral: "あなたは幅広い分野と特定の分野の両方に適応可能な能力を持っています。状況によって柔軟に対応できるため、多様なチームやプロジェクトに貢献できます。",
                    left: "あなたは高度な専門知識を持ち、その分野で圧倒的な強みを持っています。専門家としての評価が高く、深い洞察を提供できます。",
                    right: "あなたは多くの分野に対応可能なジェネラリストです。多角的な視点で問題解決ができ、チーム内で多様な役割を果たすことができます。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "リーダーとして前に出るよりも、サポート役として貢献する方だ。",
                category: "フォロワーシップvs指導力",
                answer: null,
                resultText: {
                    neutral: "あなたはリーダーとしてもサポート役としてもうまく働くことができます。状況によって最適なポジションを選び、チームに貢献できます。",
                    left: "あなたは優れたサポート役です。リーダーの補完となるスキルを持っており、組織の成功には欠かせない存在です。",
                    right: "あなたは生まれついてのリーダーです。ビジョンを持ち、他人を導く能力があります。そのため、多くの人々があなたに刺激を受けるでしょう。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "ユーザーのニーズに合わせるよりも、自分のアイデアやスタイルを強く出す。",
                category: "自己主張vsユーザーエクスペリエンス",
                answer: null,
                resultText: {
                    neutral: "あなたは自分自身とユーザーの両方を重視するバランスの取れたスタイルを持っています。状況に応じてフレキシブルに対応でき、多様なプロジェクトに貢献できます。",
                    left: "あなたは自己主張が強く、独自のスタイルやアイデアで市場に新風を吹き込むことができます。ただし、ユーザーの反応も考慮することが重要です。",
                    right: "あなたはユーザー中心のアプローチを取ることで、顧客満足度が高くなります。しかし、自分自身のスタイルも大切にすることが時には必要です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "決断をする前に調査やデータ分析はあまりせず、直感を信じて行動する。",
                category: "直感vs直感",
                answer: null,
                resultText: {
                    neutral: "あなたは直感と論理的な分析の間でバランスが取れています。状況に応じて最適な判断方法を選べるので、多面的な問題解決が可能です。",
                    left: "あなたは直感を重視し、素早い決断ができます。このスタイルは急を要する状況や、新しいアイデアが必要な時に有用です。",
                    right: "あなたはデータと分析を重視します。これにより、客観的かつ信頼性の高い決定ができますが、時には柔軟性も必要です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "学ぶときには理論を重視するよりも、実際に手を動かして学ぶことを重視する。",
                category: "実践vs理論",
                answer: null,
                resultText: {
                    neutral: "あなたは理論と実践のバランスをうまく取れる多才な人です。状況に応じて最適な学び方を選べます。",
                    left: "あなたは新しいスキルや知識を身につける際に、理論的な基礎からしっかりと学びたいと考えています。このアプローチは複雑な問題解決に強みとなります。",
                    right: "あなたは「やってみる」ことで最も効果的に学べるタイプです。このスタイルは素早いプロトタイピングや実装に有用です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "新しいことに挑戦して失敗するよりも、確実な方法を選ぶ。",
                category: "安全志向vsリスクを取る",
                answer: null,
                resultText: {
                    neutral: "あなたはリスクと安全性を適切に評価し、バランスの取れた選択ができます。この柔軟性は多様な状況での成功に寄与します。",
                    left: "あなたは安全性を重視し、リスクを極力避けます。このスタイルは長期的な安定を求める場合や、失敗が許されない状況で有利です。",
                    right: "あなたは新しい挑戦とリスクを恐れず、積極的に行動します。この姿勢は新しい機会を見つけ出す力になりますが、リスク管理も必要です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "専門vs広範",
                text: "自分がエンジニア・デザイナーのどちらかに振っている時、得意でない分野の知識はほとんど必要ない。",
                answer: null,
                resultText: {
                    neutral: "あなたは専門性と広範性のバランスが取れています。多様な状況で適応できるスキルセットを持っています。",
                    left: "あなたは専門的なスキルに焦点を当て、他の分野はあまり重視していません。このスタイルは高度な専門性を要する状況で有利です。",
                    right: "あなたは多くの分野に興味を持ち、多角的なスキルセットを目指しています。これは多様なプロジェクトやチームでの作業に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "革新vs伝統",
                text: "新しい技術やデザインに積極的に挑戦する方が良い。",
                answer: null,
                resultText: {
                    neutral: "あなたは革新と伝統の両方に価値を見い出しています。適切な状況で最適なアプローチを選びます。",
                    left: "あなたは伝統的な方法やツールに重きを置きます。このスタイルは確立された環境やプロジェクトで有用です。",
                    right: "あなたは新しい技術やデザインに対して積極的です。このスタイルは革新的なプロジェクトやスタートアップ環境で有用です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "長期計画vs即効性",
                text: "短期間での成果よりも、長期間にわたる計画やビジョンが重要である。",
                answer: null,
                resultText: {
                    neutral: "あなたは短期的な成果と長期的なビジョンのバランスを理解しています。その柔軟性は多くのプロジェクトタイプで有用です。",
                    left: "あなたは長期的な計画やビジョンに重点を置きます。このスタイルは大規模なプロジェクトや戦略的な取り組みで有利です。",
                    right: "あなたは即効性と短期間での成果を重視します。このスタイルは急な期限やスプリントワークに適しています。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "オリジナルvsベストプラクティス",
                text: "既存の良い方法やツールを用いるよりも、独自の方法で問題を解決すべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは独自の方法と既存のベストプラクティスの両方を効果的に使用します。",
                    left: "あなたは独自の方法で問題解決を試みる傾向があります。このアプローチは新しいソリューションを見つける場合に有用です。",
                    right: "あなたは既存のベストプラクティスや方法を重視します。このアプローチはリスクを最小限に抑える場合に有用です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "進捗vs完璧主義",
                text: "完璧な仕上がりを目指すよりも、進捗を重視すべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは進捗と完璧主義の間で適切なバランスを取っています。タスクの性質に応じてアプローチを変えることができます。",
                    left: "あなたは完璧な仕上がりを目指します。このスタイルは高品質な作品を作る際に有利ですが、時間管理に注意が必要です。",
                    right: "あなたは進捗を重視します。このスタイルは迅速な開発や迭代に有利ですが、品質にも注意が必要です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "主導vs参加",
                text: "自分が主導してプロジェクトを進める方が良い。",
                answer: null,
                resultText: {
                    neutral: "あなたはリーダーとしてもチームメンバーとしても効果的に働けます。状況に応じて適切な役割を選びます。",
                    left: "あなたは主導的な役割を好みます。このスタイルは自分自身のビジョンを確実に実現する場合に有利です。",
                    right: "あなたはチーム内で協力的な役割を好みます。このスタイルは多様な意見やスキルセットを活かす場合に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "外向vs内省",
                text: "自己認識と独自のスキル開発よりも、チームや外部との協力を重視すべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは自己認識と外部との協力の間でバランスを保っています。多くの環境で適応できます。",
                    left: "あなたは自己認識とスキル開発に重点を置きます。このスタイルは自己成長と専門性の向上に有利です。",
                    right: "あなたはチームや外部との協力を重視します。このスタイルはチームワークとプロジェクトの成功に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "大局vs詳細",
                text: "詳細にこだわるよりも、全体の流れや大局を考えるべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは全体のビジョンと詳細の実行のバランスが取れています。多くのプロジェクトタイプで有用です。",
                    left: "あなたは全体の流れや大局に注目しています。このスタイルは戦略的な計画やビジョンの形成に有利です。",
                    right: "あなたは詳細にこだわります。このスタイルは精密な作業や高品質の成果を出す場合に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "定番vs定番",
                text: "トレンドを追いかけるよりも、定番のデザインやテクニックに焦点を当てるべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたはトレンドと定番のバランスを理解しています。多様なプロジェクトや顧客に適応できます。",
                    left: "あなたは定番のデザインやテクニックに重点を置きます。このスタイルは時代を超越した価値が求められる場合に有利です。",
                    right: "あなたは最新のトレンドに敏感です。このスタイルは現代の消費者や高度なテクノロジーに適応する場合に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            }
        ],
        designer: [
            {
                text: "デザインは、見た目よりも使いやすさ・機能性が重要だ。",
                category: "機能vs形",
                answer: null,
                resultText: {
                    neutral: "あなたは機能と形のバランスを重視するデザイナーです。これはプロダクトが使いやすい一方で、魅力的な見た目も保つという理想的な中間点を目指している可能性があります。",
                    left: "あなたは機能性を最優先するデザイナーです。あなたのデザインは非常に実用的であり、特に機能性を重視するユーザーには非常に魅力的です。しかし、ビジュアルアピールを高めることで、より多くのユーザーを引き付けることができるかもしれません。",
                    right: "あなたは形、つまりデザインを重視するデザイナーです。機能性にも注意を払い、ユーザーが目的を達成できるようにすることで、あなたのデザインはさらに優れたものになるでしょう。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "ユーザーのニーズや課題解決ではなく、芸術的な表現や自己表現を主眼に置く。",
                category: "アート中心vsユーザー中心",
                answer: null,
                resultText: {
                    neutral: "あなたは芸術的な表現とユーザーのニーズのバランスを取るスタイルを持っています。あなたのデザインは多様なユーザー層に響く可能性があり、機能性と美しさの両方を兼ね備えることができます。",
                    left: "あなたは芸術的な表現を重視するデザイナーです。あなたの作品は感動を呼び起こし、強い印象を与えることができるでしょう。ただし、ユーザビリティの向上も念頭に置くことで、より優れたデザインが実現可能です。",
                    right: "あなたはユーザーのニーズを重視するデザイナーです。機能性に重点を置きつつ、ビジュアルの魅力を高めることで、ユーザーにとってより完璧な体験を提供できるでしょう。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "シンプルさよりも、細部に渡る装飾や要素が重要だ",
                category: "詳細度vsミニマリズム",
                answer: null,
                resultText: {
                    neutral: "あなたは詳細とシンプルさの両方に価値を見い出しています。このバランスは、多くの場合で広い視点を持つことを可能にします。あなたのデザインは多様なニーズを満たす柔軟性を持ち、幅広いユーザー層にアプローチできるでしょう。",
                    left: "あなたは細部の装飾や要素を重視しています。これは視覚的に魅力的なデザインを生む可能性がありますが、使い勝手が犠牲になる場合もあるでしょう。あなたの作品は豊かで感性を刺激するものですが、シンプルさを加えることで、より多くのユーザーにとってアクセスしやすくなります。",
                    right: "あなたはシンプルなデザインを好む傾向があります。これは使い勝手を高めますが、一部の人々には退屈に感じられるかもしれません。創造性と独自性をプラスすることで、あなたのデザインはさらに引き立つでしょう。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "UI(見た目・スタイル)設計よりもUX(ユーザー体験・機能)設計が大事だ",
                category: "UXvsUI",
                answer: null,
                resultText: {
                    neutral: "あなたはUIとUXの重要性を同等に考えている可能性があります。これは、使い勝手と見た目の両方をバランスよく考慮するアプローチです。",
                    left: "あなたはUX、つまりユーザー体験を最優先しています。これは使い勝手が高く、効率的なプロダクトを作る基礎となります。",
                    right: "あなたはUI、すなわち見た目やスタイルを重視しています。美しいデザインは人々を引きつける力がありますが、機能性も考慮する必要があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "静的なデザインよりも、動きのある要素（スクロールアニメーション、ホバーエフェクト等）が重要だ。",
                category: "アニメーションvs静的",
                answer: null,
                resultText: {
                    neutral: "あなたは動きのある要素と静的な要素の両方に価値を見い出しています。このバランスが良いプロダクト作りの基礎となり得ます。",
                    left: "あなたは動きのある要素を重視しています。これはユーザーに新鮮な体験を提供する一方で、過度な動きは使い勝手を損なう可能性もあります。",
                    right: "あなたは静的なデザインを重視しています。これは使い勝手が高く、わかりやすいデザインを作る基礎ですが、あまりにも単調だと感じられる場合もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "既存のテンプレートやフレームワークを使うよりも、一からオリジナルで設計するべきだ。",
                category: "カスタムvsテンプレート",
                answer: null,
                resultText: {
                    neutral: "あなたはテンプレートとカスタム設計の間でバランスを取っている可能性があります。この姿勢は多くのプロジェクトで適応性と効率性を高めるでしょう。",
                    left: "あなたは一からオリジナルで設計することを重視しています。この方法はユニークなプロダクトを作成する一方、時間とリソースがかかる場合があります。",
                    right: "あなたは既存のテンプレートやフレームワークを使うことを好む傾向があります。これは効率的でリスクが少ないが、オリジナリティが欠ける可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "シンプルで直感的なUIよりも、遊び心やユニークな要素を含むUIが好ましい。",
                category: "遊び心のあるUIvs自然なUI",
                answer: null,
                resultText: {
                    neutral: "あなたはシンプルさと遊び心の間でバランスを取ることができるようです。これは多くのターゲットオーディエンスに適している可能性があります。",
                    left: "あなたは遊び心やユニークな要素を含むUIを好んでいます。これはユーザーに楽しい体験を提供するが、時には使い勝手を犠牲にする可能性もあります。",
                    right: "あなたはシンプルで直感的なUIを重視しています。これは使い勝手が高く、誰でも容易に理解できる一方、いくつかのユーザーには退屈に感じられる可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "ウェブサイトのテキストには一般的な言葉を使用するよりも、専門用語や業界用語を使用するべきだ。",
                category: "専門用語vs自然言語",
                answer: null,
                resultText: {
                    neutral: "あなたは専門用語と一般的な言葉のバランスを適切に取ることができるでしょう。これは広い範囲のユーザーに訴求する能力を持っているかもしれません。",
                    left: "あなたは専門用語や業界用語の使用を重視しています。これは専門家や業界人には理解が深まるが、一般の人には難解に感じられる場合があります。",
                    right: "あなたは一般的な言葉を使用することを重視しています。これは多くの人々にとってアクセスしやすく、理解しやすいが、専門的なニュアンスが失われる場合もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            }
        ],
        engineer: [
            {
                category: "強型vs弱型",
                text: "動的な型付け（例:JavaScript, Python）よりも、型が厳格に定義されている言語（例:TypeScript, Java）が好ましい。",
                answer: null,
                resultText: {
                    neutral: "あなたは動的な型付けと厳格な型付けの言語の両方に柔軟性があります。プロジェクトの要件に応じて選択ができます。",
                    left: "あなたは厳格な型付けの言語に傾いています。このスタイルはコードの品質を向上させ、エラーを早期に検出することができます。",
                    right: "あなたは動的な型付けの言語を好みます。このスタイルは開発速度を高め、柔軟なコード設計が可能です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "専門性vs幅広く",
                text: "エンジニアは、デザインの知識はデザイナーに任せ、自分の専門分野に注力すべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは専門性と多様性のバランスが取れています。異なるプロジェクトとチームで効果的に働くことができます。",
                    left: "あなたは専門性に重点を置きます。このスタイルは深い知識とスキルを持って問題解決する場合に有利です。",
                    right: "あなたは多様なスキルと知識に価値を見い出します。このスタイルは複数の分野にわたるプロジェクトで有用です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "単体テストvs統合テスト",
                text: "複数の部分が連携して動作する場面でのテストよりも、主に小さな単位（関数、メソッド）でのテストに重点を置くべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは単体テストと統合テストの両方に適性があります。このバランスは品質保証に幅広く対応できる利点があります。",
                    left: "あなたは単体テストに重点を置きます。このスタイルはコードの早期エラー検出と効率的なデバッグに有利です。",
                    right: "あなたは統合テストを重視します。このスタイルはシステム全体の動作を確認し、実際の運用環境での問題を早く見つける場合に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "ワイヤーフレームvsプロトタイピング",
                text: "プロトタイピング（詳細なデザイン、インタラクション）よりも、初期段階でのワイヤーフレームに重点を置くべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたはワイヤーフレームとプロトタイピングの両方を効果的に利用できます。プロジェクトのフェーズに応じて適切なアプローチが選べます。",
                    left: "あなたは初期段階でのワイヤーフレームに重点を置きます。このスタイルはプロジェクトの早期段階での方向性を確立する場合に有利です。",
                    right: "あなたは詳細なプロトタイピングに価値を見い出します。このスタイルは高度なインタラクションとユーザーエクスペリエンスを練り込む場合に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "パフォーマンスvs見た目",
                text: "見た目（デザイン、エフェクト）よりも、パフォーマンス（速度、効率）に重点を置くべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは見た目とパフォーマンスの両方に適度な重視をしています。これは多様なプロジェクト要件に柔軟に対応できる力量を示しています。",
                    left: "あなたはパフォーマンスに重点を置いています。これは特に大規模なシステムや高度な計算が必要なアプリケーションにおいて、ユーザーエクスペリエンスを高める可能性があります。",
                    right: "あなたはデザインや見た目に重点を置いています。このアプローチは特に、ユーザーエンゲージメントが求められるウェブサイトやアプリケーションに有効です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "モバイルファーストvsデスクトップファースト",
                text: "デスクトップファーストのデザインよりも、モバイルファーストでデザインを考えるべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたはモバイルとデスクトップの両方にバランスを取っています。これにより、多くのデバイスで使いやすいデザインを作成することができます。",
                    left: "あなたはモバイルファーストのデザインに重点を置きます。これは特に、スマートフォンを主なターゲットとするプロジェクトで有効です。",
                    right: "あなたはデスクトップファーストでデザインを考えます。これは特に、エンタープライズソフトウェアや大規模なウェブアプリケーションにおいて有用です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "フレームワークvsライブラリ",
                text: "特定の機能に特化したライブラリ（例:lodash, axios）よりも、大規模なフレームワーク（例:React, Angular）を使用するべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたはフレームワークとライブラリの両方を適切に使い分ける能力があります。これはプロジェクトの規模や要件によって最適な選択ができることを意味します。",
                    left: "あなたは大規模なフレームワークの使用に重点を置いています。この選択は、統一されたアーキテクチャとコンポーネントの再利用性が求められるプロジェクトに適しています。",
                    right: "あなたは特定の機能に特化したライブラリの使用を好みます。これはコードの柔軟性を保ちつつ、必要な機能だけを効率的に実装する場合に有効です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "CSSinJSvs伝統的なスタイリング",
                text: "CSS/SASS/LESSのような伝統的なスタイリングよりも、CSS-in-JSライブラリ（例:styled-components）を使用するべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたはCSS-in-JSと伝統的なスタイリングの両方を理解しています。これはプロジェクトやチームのニーズに応じて柔軟に対応できるスキルセットを示しています。",
                    left: "あなたは伝統的なスタイリング手法を好みます。このアプローチは既存のプロジェクトや広範なブラウザ対応が必要なケースで有用です。",
                    right: "あなたはCSS-in-JSの利用に傾いています。これはコンポーネントベースのアーキテクチャでスタイリングを効率的に管理する場合に有利です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                category: "手書きCSSvsフレームワーク",
                text: "フレームワーク（Bootstrap、Tailwindなど）を使うよりも、手書きでCSSを作成するべきだ。",
                answer: null,
                resultText: {
                    neutral: "あなたは手書きのCSSとフレームワークの使用にバランスがあります。これにより、プロジェクトのニーズや時間制限に応じて最適な選択ができます。",
                    left: "あなたは手書きのCSSを重視しています。これは完全なコントロールとカスタマイズが可能で、特定のプロジェクト要件に対応する場合に有用です。",
                    right: "あなたはCSSフレームワークの使用に重点を置いています。これにより、迅速なプロトタイピングと一貫したUIを短期間で実現することが可能です。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            }

        ],
        director: [
            {
                text: "プロジェクトの細かな部分に深く関与するよりも、大局的な視点でプロジェクトを管理するべきだ。",
                category: "マクロマネージメントvsマイクロマネジメント",
                answer: null,
                resultText: {
                    neutral: "あなたはマクロとマイクロのマネジメント手法にバランスがあります。これにより、プロジェクトの状況に応じて適切な管理手法を選べます。",
                    left: "あなたはマクロマネージメントに重点を置いています。これにより、プロジェクト全体の方向性をしっかりと見据え、効率的なリソース配分が可能です。",
                    right: "あなたはマイクロマネジメントに力を入れています。これが可能なのは、細かな部分まで気を配ることで高品質な成果物を作り出す能力があるからです。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "単に制作物を完成させることよりも、ビジネス戦略と連動させたプロジェクト管理をするべきだ。",
                category: "戦略vs制作",
                answer: null,
                resultText: {
                    neutral: "あなたは制作と戦略の両方にバランスがあります。これにより、ビジネス価値と高品質な制作物を両立できます。",
                    left: "あなたはプロジェクト管理において戦略的な観点が強く、ビジネス価値を最優先します。",
                    right: "あなたは高品質な制作物を作ることに注力しています。これにより、ユーザーエクスペリエンスが向上し、結果的にビジネス価値が生まれることも多いです。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "アジャイルな開発手法（例：スクラム）を用いるより、伝統的なウォーターフォールモデルを用いるべきだ。",
                category: "ウォーターフォールvsスクラム",
                answer: null,
                resultText: {
                    neutral: "あなたはアジャイルとウォーターフォールの両方のメリットを理解しています。プロジェクトの性質に応じて、柔軟に開発手法を選ぶことができます。",
                    left: "あなたはウォーターフォールモデルの計画的なアプローチに重点を置いています。これにより、明確なゴール設定とリスク管理が可能です。",
                    right: "あなたはアジャイルな手法を好んでいます。これにより、変化に強く、フィードバックを即座に取り入れることができます。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "ユーザーエクスペリエンスを最優先するより、ビジネスのKPI（重要業績評価指標）に重点を置くべきだ。",
                category: "ビジネスKPIvsUX",
                answer: null,
                resultText: {
                    neutral: "ビジネスKPIとユーザーエクスペリエンスの両方の重要性を理解しています。状況に応じて適切なバランスを取ることができます。",
                    left: "あなたはビジネスのKPIに焦点を当てています。効率と収益性を最優先し、戦略的な決定を行います。",
                    right: "あなたはユーザーエクスペリエンスを最優先に考えています。顧客満足度とブランドイメージに重点を置いています。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "チームメンバーとの一対一の対話を重視するよりも、チーム全体とのコミュニケーションに焦点を当てるべきだ。",
                category: "チーム内コミュニケーションvs一対一のコミュニケーション",
                answer: null,
                resultText: {
                    neutral: "あなたはチーム内コミュニケーションと一対一のコミュニケーションにおいてバランスの取れたスキルを持っています。これにより、チームの総合的なパフォーマンスと個々のメンバーの能力を最大限に活かすことができます。",
                    left: "あなたはチーム全体とのコミュニケーションに重点を置いており、これによりチーム内での情報共有が円滑に行えます。しかし、個々のメンバーとの密なコミュニケーションが不足する可能性もあります。",
                    right: "あなたは一対一のコミュニケーションを重視し、個々のメンバーと深く関わることで、その能力とモチベーションを高めることができます。しかし、これがチーム全体の効率を下げる可能性も考慮する必要があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "決定を下す際、データと分析に依存するべきで、直感や経験は優先しないべきだ。",
                category: "データ駆動vs直感駆動",
                answer: null,
                resultText: {
                    neutral: "あなたはデータと直感の両方を効果的に使って決定を下すことができます。これにより、状況に応じて最適な選択ができるでしょう。",
                    left: "あなたはデータと分析に重点を置いています。これは客観的な判断が可能ですが、状況に応じた柔軟な対応が求められる場合もあります。",
                    right: "あなたは直感や経験を重視しています。これにより柔軟な対応が可能ですが、データを無視すると客観性に欠ける可能性があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "プロジェクトでクリエイティブな側面（デザイン、内容等）よりも、ロジスティック（スケジュール、予算、リソース）に重点を置く。",
                category: "ロジスティックvsクリエイティブ",
                answer: null,
                resultText: {
                    neutral: "あなたはロジスティックとクリエイティブのバランスが取れています。これにより、プロジェクトを効率的かつ創造的に進めることができます。",
                    left: "あなたはロジスティックに重点を置き、スケジュールや予算に厳格です。しかし、クリエイティブな要素が犠牲になる可能性もあります。",
                    right: "あなたはクリエイティブな要素に重点を置いています。これにより、ユニークで魅力的なプロジェクトが可能ですが、スケジュールや予算を乱す可能性も考慮する必要があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "短期的なプロジェクトよりも、長期的なビジョンを持つプロジェクトの方が自分に合っている。",
                category: "長期プロジェクトvs短期プロジェクト",
                answer: null,
                resultText: {
                    neutral: "あなたは短期的なプロジェクトと長期的なプロジェクトの両方に適応する能力があります。これにより、多様なプロジェクトで貢献できるでしょう。",
                    left: "あなたは長期的なビジョンを重視しています。これにより、持続可能な成果を出すことができますが、短期的な機会を逃す可能性もあります。",
                    right: "あなたは短期的なプロジェクトに焦点を当てています。これにより、すぐに成果を出すことができますが、長期的なビジョンが欠ける可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "決断においてリーダーシップを強く発揮するよりも、チーム全体のコンセンサスを取るスタイルが好ましい。",
                category: "コンセンサスvsリーダーシップ",
                answer: null,
                resultText: {
                    neutral: "あなたはリーダーシップとコンセンサスのバランスをうまくとれています。これにより、チームは統一感がありながらも、各メンバーが意見を反映できる環境が整っています。",
                    left: "あなたはチーム全体のコンセンサスを重視しています。これにより、メンバーが貢献感を得ることができますが、迅速な決断が必要な場合には難しくなる可能性があります。",
                    right: "あなたは強いリーダーシップを発揮しています。これにより、迅速な決断と実行が可能ですが、メンバーの意見が反映されにくい状況も生じる可能性があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "高品質な仕上がりを最優先すべきで、効率と速度は犠牲になっても仕方がない。",
                category: "クオリティvs速度",
                answer: null,
                resultText: {
                    neutral: "あなたは高品質と効率のバランスを保つ能力があります。このようなアプローチは、状況に応じて柔軟に調整することができ、プロジェクトの成功に大きく貢献します。",
                    left: "あなたは高品質な仕上がりを最優先しています。このアプローチは、細部まで配慮されたプロダクトやサービスを提供できる一方で、時間とリソースが多くかかる可能性があります。",
                    right: "あなたは効率と速度を重視しています。このアプローチは、迅速にタスクを完了させることができますが、品質が犠牲になる可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "手作業で細部まで確認せず、タスクやプロセスをできるだけ自動化する。",
                category: "自動化vs手作業",
                answer: null,
                resultText: {
                    neutral: "あなたは手作業と自動化の適切なバランスを取ることができます。これにより、効率性と精度を両立させ、多様なプロジェクトに対応することができます。",
                    left: "あなたはプロセスを自動化することを重視しています。このアプローチは、大量の作業を効率良く処理できますが、細かい点での誤りを見逃す可能性もあります。",
                    right: "あなたは手作業で細部まで確認するスタイルを取っています。これにより、高度な精度を保つことができますが、全体の効率が落ちる可能性があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "チームが同じ場所で働くことにこだわらず、リモートワークや分散チームでも効果的にマネージメントできる。",
                category: "リモートマネージメントvsローカル",
                answer: null,
                resultText: {
                    neutral: "あなたはリモートとローカルのマネージメントの両方に柔軟です。これにより、チームメンバーがどこにいても、効果的なコミュニケーションと生産性を維持することができます。",
                    left: "あなたはリモートマネージメントに長けています。このスキルは、地理的な制約を乗り越え、多様な才能を活かすことができますが、チーム内のつながりを弱める可能性もあります。",
                    right: "あなたはローカルでのマネージメントを重視しています。このスタイルは、メンバー間の密なコミュニケーションを促し、チームの一体感を高めますが、リモートでの効率的な働き方が制限される可能性があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            }
        ],
        allRounder: [
            {
                text: "デザインのコンセプトやビジュアルアイデアよりも、具体的な実装スキルに重きを置くべきだ。",
                category: "実装vsコンセプト",
                answer: null,
                resultText: {
                    neutral: "あなたはデザインのコンセプトと実装スキルのバランスを良く理解している可能性があります。両者は相互に依存するため、このバランス感覚はプロジェクトを成功へ導く鍵となるでしょう。",
                    left: "あなたは具体的な実装スキルに重きを置いています。この方法はプロジェクトの目的を速く達成する可能性がありますが、ビジュアルアイデアやコンセプトが希薄になるリスクもあります。",
                    right: "あなたはデザインのコンセプトやビジュアルアイデアを優先しています。このアプローチは魅力的なプロダクトを作る可能性がありますが、実装の難易度が高くなる場合もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "フロントエンド（HTML, CSS, JavaScript）に集中するよりも、バックエンド（サーバーサイド、データベース）にも手を出すべきだ。",
                category: "バックエンドvsフロントエンド",
                answer: null,
                resultText: {
                    neutral: "あなたはフロントエンドとバックエンドの重要性を両方認識しているようです。この柔軟性は、多様なプロジェクトに対応する力を持っているかもしれません。",
                    left: "あなたはバックエンドに重点を置く傾向があります。これはデータ管理やビジネスロジックがしっかりしている場合、長期的な成功が見込めるでしょう。",
                    right: "あなたはフロントエンドに集中することを好むようです。ユーザー体験が向上する一方で、バックエンドが脆弱だと全体のパフォーマンスが損なわれる可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "ユーザビリティ（使いやすさ、アクセシビリティなど）を優先するべきで、ビジュアルデザインとエステティックは二の次であるべきだ。",
                category: "ユーザビリティvsエステティック",
                answer: null,
                resultText: {
                    neutral: "あなたはユーザビリティとエステティックの両方が重要だと考えているようです。このバランスは多くのユーザーにとって良い経験を提供する可能性があります。",
                    left: "あなたはユーザビリティを重視しています。使いやすくアクセシブルな製品は、多くのユーザーに受け入れられる可能性が高いです。",
                    right: "あなたはビジュアルデザインとエステティックに重きを置いています。これによって製品は目を引くが、使い勝手が犠牲になる可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "単独で効率よく作業を進めるよりも、チームで協力してプロジェクトを進めるべきだ。",
                category: "チーム作業vs単独作業",
                answer: null,
                resultText: {
                    neutral: "あなたはチームでの協力と単独での作業の間で適切なバランスを取る能力がありそうです。状況に応じて最適な方法を選べるでしょう。",
                    left: "あなたはチームで協力してプロジェクトを進めることを重視しています。多角的な視点とスキルセットはプロジェクトを豊かにしますが、調整に時間がかかる場合もあります。",
                    right: "あなたは単独で効率よく作業を進めることを好む傾向があります。これにより速く結果を出せるかもしれませんが、多角的な視点が欠ける可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "速いペースで仕事をこなすよりも、少し時間をかけてでも品質を確保するべきだ。",
                category: "品質vs速度",
                answer: null,
                resultText: {
                    neutral: "あなたは速度と品質のバランスをうまく取ることができるでしょう。プロジェクトの状況に応じて、適切な重視点を選ぶ柔軟性がありそうです。",
                    left: "あなたは品質を重視しています。このアプローチは、長期的な信頼と成功を築く基盤になる可能性があります。",
                    right: "あなたは速度を重視する傾向があります。これは短期的に成果を出すためには有効ですが、品質が犠牲になる場合も考慮する必要があります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "多くの異なるスキルセット（例:UIデザイン, UXデザイン, プログラミング, グラフィックデザインなど）を持つよりも、特定のエリアで非常に専門的なスキルを持つべきだ。",
                category: "専門性vs広範的",
                answer: null,
                resultText: {
                    neutral: "あなたは多様なスキルと専門性の両方が重要だと認識している可能性があります。このバランス感覚は、多くの場面であなた自身やプロジェクトを高める力になるでしょう。",
                    left: "あなたは特定のエリアでの専門性に価値を見い出しています。この深い知識とスキルは、その領域で非常に高い成果を上げる可能性があります。",
                    right: "あなたは多くの異なるスキルセットを重視しています。これは多様なプロジェクトや問題解決に柔軟に対応できる一方で、専門性が乏しいと感じられる可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "既存のフレームワークを使うよりも、カスタムコードを書いて特定のニーズに対応するべきだ。",
                category: "カスタムコードvsフレームワーク",
                answer: null,
                resultText: {
                    neutral: "あなたは既存のフレームワークとカスタムコードの両方が有用であると考えている可能性があります。そのバランスがプロジェクトの成功につながるでしょう。",
                    left: "あなたはカスタムコードの作成に価値を見い出しています。これによって、特定のニーズや要件に非常に柔軟に対応できるでしょう。",
                    right: "あなたは既存のフレームワークの使用を優先しています。これは開発速度を速め、一般的なベストプラクティスを維持する助けになるでしょう。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "プロトタイプを速く作成してフィードバックを集めるよりも、初めから完全な仕上がりを目指すべきだ。",
                category: "完全仕上げvsプロトタイピング",
                answer: null,
                resultText: {
                    neutral: "あなたはプロトタイピングと完全仕上げの両方に価値を見い出している可能性があります。この二つのアプローチをうまく組み合わせれば、効果的なプロダクト開発が可能です。",
                    left: "あなたは初めから完全な仕上がりを目指しています。このアプローチは、最終製品の品質を確保するために有用ですが、開発時間が長くなる可能性もあります。",
                    right: "あなたはプロトタイピングと迅速なフィードバックを重視しています。これによって、ユーザーのニーズに迅速に対応し、必要な改良を加えやすくなるでしょう。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            },
            {
                text: "多くの機能を提供するよりも、シンプルで使いやすいインターフェースにするべきだ。",
                category: "シンプルvs多機能",
                answer: null,
                resultText: {
                    neutral: "あなたはシンプルなインターフェースと多機能性のバランスが大切だと認識している可能性があります。この視点は、多くのユーザーにとって使いやすく、かつ機能豊富なプロダクトを作るために役立つでしょう。",
                    left: "あなたはシンプルで使いやすいインターフェースを優先しています。これにより、ユーザーが迷わず直感的に操作できるプロダクトが生まれるでしょう。",
                    right: "あなたは多くの機能を提供することを重視しています。これにより、多くのニーズに対応できる一方で、ユーザーが操作に戸惑う可能性もあります。"
                },
                categoryLeftPercent: "50%",
                categoryRightPercent: "50%"
            }
        ]
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
    const data = {
        designer: [
            {
                title: "ビジュアルの魔術師",
                text: "あなたは色、形、テクスチャを駆使して目を引くデザインを作り上げる才能を持っています。細部にわたる注意と美的センスで、他とは一線を画した作品を生み出します。"
            },
            {
                title: "UXの達人",
                text: "ユーザーのニーズを深く理解し、使いやすく効果的なデザインを実現します。あなたの作るプロダクトは直感的で、エンドユーザーの満足度を高めます。"
            },
            {
                title: "ブランディングのアーティスト",
                text: "強力なブランドイメージを創造し、ビジュアルを通じて企業や製品の価値を伝えます。あなたのデザインは、人々の心に残り、信頼を築きます。"
            },
            {
                title: "インタラクティブな先駆者",
                text: "新しいテクノロジーとクリエイティブなアイデアを組み合わせ、革新的なインタラクションを生み出します。あなたはユーザーに新しい体験を提供し、常に業界をリードします。"
            }
        ],
        engineer: [
            {
                title: "コードの詩人",
                text: "エレガントで効率的なコードを書くことで、複雑な問題を簡単に解決します。あなたのプログラミングスキルは他の追随を許しません。"
            },
            {
                title: "データの冒険者",
                text: "大量のデータから有益な情報を引き出し、ビジネスの意思決定を支援します。機械学習やデータ解析において、あなたは真のエキスパートです。"
            },
            {
                title: "システムの建築家",
                text: "高度なソフトウェアアーキテクチャを設計し、効率的で安定したシステムを構築します。あなたは技術的な基盤を固め、長期的な成功をサポートします。"
            },
            {
                title: "フルスタックの戦士",
                text: "フロントエンドからバックエンドまで、幅広い技術スタックに精通しています。あなたはプロジェクトのあらゆるフェーズで活躍し、チームをリードします。"
            }
        ],
        director: [
            {
                title: "ビジョンの先導者",
                text: "明確な目標設定と情熱でプロジェクトを牽引し、チームを成功に導きます。あなたのビジョンは、他の追随を許しません。"
            },
            {
                title: "コミュニケーションの達人",
                text: "絶妙なコミュニケーションスキルでチーム内外と円滑に連携し、プロジェクトをスムーズに進めます。あなたは関係構築のプロフェッショナルです。"
            },
            {
                title: "リーダーシップの自然体",
                text: "自然体でチームを引っ張り、メンバーをモチベートします。あなたのリーダーシップスタイルは、人々を鼓舞し、最高のパフォーマンスを引き出します。"
            },
            {
                title: "プロジェクトのオーケストレータ",
                text: "複数の要素を巧みに調和させ、プロジェクトを成功に導きます。あなたはチームの調和を保ちながら、目標達成へと導きます。"
            }
        ],
        allRounder: [
            {
                title: "万能のスイスアーミーナイフ",
                text: "あらゆるスキルをバランスよく持ち合わせており、どんな状況でも即座に適応します。あなたはチームにとって貴重な資源です。"
            },
            {
                title: "クリエイティブなゼネラリスト",
                text: "多様な分野においてクリエイティブなアプローチで優れた成果を上げます。あなたの柔軟な発想は、新しいアイデアを生み出す原動力となります。"
            },
            {
                title: "バランスの維持者",
                text: "技術とデザインのバランスを取りながら、高いパフォーマンスを発揮します。あなたは多様なスキルを活かして、プロジェクトを成功に導きます。"
            },
            {
                title: "イノベーションの火付け役",
                text: "既存の枠を超えて新しい方法を探求し、イノベーションを生み出します。あなたの創造力は、未来を切り開く力となります。"
            }
        ],
        other: [
            {
                title: "ジャック・オブ・オールトレーズ",
                text: "あなたは幅広いスキルを持ち合わせており、どんな状況でも貢献できます。あなたの多才さは、チームにとって大きな価値となります。"
            },
            {
                title: "無限の可能性",
                text: "あなたの潜在能力は計り知れず、これからの活躍が期待されます。新しい挑戦への意欲と情熱で、未来を切り開いていきます。"
            },
            {
                title: "変わり種のクリエイター",
                text: "標準的なカテゴリには収まらないユニークなスキルと視点を持ち合わせています。あなたのオリジナリティは、新しい価値を生み出します。"
            },
            {
                title: "探求者",
                text: "あなたはまだ自分の道を見つけている途中ですが、その探求心は大きな可能性を秘めています。未知の道を切り開く勇気と好奇心で、自分自身を成長させていきましょう。"
            }
        ]
    }

    return
}

