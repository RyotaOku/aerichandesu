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