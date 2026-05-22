export const companyProfile = {
  name: '深圳乐心信息技术有限公司',
  enName: 'Shenzhen Lexin Information Technology Co., Ltd.',
  founded: '2019',
  title: '智能硬件方案定制商',
  qualification: '国家级高新技术企业',
  phone: '13926561580',
  email: 'hewei@lexiniot.cn',
  address: '广东省深圳市南山区沙河西路深圳湾科技生态园9栋9楼',
  // 地图默认坐标（深圳湾科技生态园附近），以及高德 Key 占位符
  location: { lng: 113.933, lat: 22.533 },
  amapKey: 'YOUR_AMAP_KEY',
  mission: '技术赋能智能硬件，方案服务行业发展',
  vision: '成为行业数字化转型的核心合作伙伴，共建智能互联未来',
  intro: [ 
    '深圳乐心信息技术有限公司公司成立于2019年，是一家智能硬件方案商，集研发、生产的 OEM/ODM供应商，专注于创新技术应用的高新技术企业。',
    '公司核心团队来自于国内高科技公司，拥有17年以上的无线通信及智能硬件设备相关产品研发经验，在跨专业技术融合、复杂大系统建设运营方面有独特优势。',
    ' 业务涉及智能定位、智能手机、智能平板、物联网模块、智能车联网、智能穿戴等领域，为客户提供技术研发、产品设计、供应链、售后服务等全产业链的解决方案。'
  ],
  strengths: [
    '专注智能硬件 OEM/ODM 定制与行业解决方案',
    '核心团队具备 17 年以上通信与智能终端研发经验',
    '覆盖北斗/GPS 定位、4G 全网通、DMR 专网对讲等关键能力',
    '服务文旅、应急、工业巡检、安防与智慧园区等多场景',
  ],
}

export const businessAreas = [
  '智能定位',
  '无线通信',
  '物联网模块',
  '智能手持终端',
  '智能车联网',
  '智能穿戴',
  '智慧文旅',
]

export const advantages = [
  { title: '快速定制', desc: '2-4 个月可交付行业定制方案，快速响应市场需求。' },
  { title: '核心技术', desc: '北斗/GPS 多模定位、4G 全网通、DMR 数字对讲等能力成熟。' },
  { title: '高可靠性', desc: '适配户外、工业、防爆、应急等复杂环境，稳定可用。' },
]

export const newsList = [
  {
    title: '乐心发布 2026 智能硬件产品矩阵',
    date: '2026-04-12',
    summary: '围绕北斗通信、智能定位、专网对讲等方向，形成覆盖多行业的产品体系。',
  },
  {
    title: '智慧景区一体化平台完成新一轮升级',
    date: '2026-03-05',
    summary: '平台新增游客服务与运营分析模块，提升景区管理效率与服务体验。',
  },
  {
    title: '高精度定位终端落地物流与制造场景',
    date: '2026-01-22',
    summary: '亚米级/厘米级定位能力在物流追踪与生产调度场景完成验证。',
  },
]

export const products = [
  {
    id: 'beidou-handset',
    name: '北斗短报文终端',
    shortDesc: '融合北斗短报文与 4G 全网通能力，适配海上与应急通信场景。',
    image: 'https://picsum.photos/900/600?random=31',
    tags: ['北斗短报文', '4G全网通', '应急通信'],
    devCycle: '3个月',
    applications: ['海上通信', '野外测绘', '旅游探险', '应急救灾'],
    detail:
      '面向应急指挥、户外作业、林业巡护等场景，支持卫星通信与公网通信协同，保障弱网或无网环境下的稳定联络与信息回传。',
    specs: [
      'CPU：八核 2.3GHz',
      '内存：6GB + 128GB',
      '系统：Android 12.0',
      '屏幕：5.99 寸 FHD IPS',
      'RDSS：≤1000 汉字，支持 RDSS V2.1',
    ],
  },
  {
    id: 'dmr-module',
    name: 'DMR 通讯模块',
    shortDesc: '数字对讲通讯模块，支持专网组网与行业调度应用。',
    image: 'https://picsum.photos/900/600?random=32',
    tags: ['DMR', '专网调度', '数字对讲'],
    devCycle: '3个月',
    applications: ['铁路消防', '楼宇安防', '手机数字对讲'],
    detail:
      '面向铁路、消防、应急等行业，提供清晰语音、稳定链路与高安全通信能力。支持楼宇小区安防广播与手机数字对讲系统，可按项目需求进行软硬件定制。',
    specs: [
      '通信制式：DMR 数字对讲',
      '能力：群组调度、语音对讲、状态上报',
      '扩展：支持公网/专网混合调度',
    ],
  },
  {
    id: 'thermal-imaging',
    name: '热成像终端',
    shortDesc: '集成红外热成像模块，适用于电力检测与设备巡检。',
    image: 'https://picsum.photos/900/600?random=33',
    tags: ['热成像', '红外检测', '设备巡检'],
    devCycle: '3个月',
    applications: ['电力行业', '设备检测', '汽车维修', '动物搜寻'],
    detail:
      '搭载全志 V853S 硬件平台与 Linux 系统，集成红外热成像传感器，可快速识别设备温度异常与热源目标，广泛用于电力巡检、工业设备维护及户外搜寻场景。',
    specs: [
      '硬件平台：全志 V853S',
      '系统：Linux',
      '存储：128M DDR3 + 16MB Nor Flash',
      '屏幕：5 寸 HD 1280×720',
      '连接：2.4GHz WiFi + BT 4.0 BLE',
    ],
  },
  {
    id: 'beidou-box',
    name: '北斗盒子',
    shortDesc: '轻量级北斗通信终端，支持语音、数据与短报文业务。',
    image: 'https://picsum.photos/900/600?random=34',
    tags: ['北斗通信', '短报文', '视频回传'],
    devCycle: '2个月',
    applications: ['海上通信', '电力线路维护', '野外测绘', '应急救灾'],
    detail:
      '面向海上通信、野外测绘与应急通信等场景，支持语音通话、传真、数据业务与视频回传，短消息最长 1000 字，满足弱网环境下的多样化通信需求。',
    specs: [
      '语音：1.2/2.4Kbps',
      '数据业务：1.2Kbps-9.6Kbps 分档可变',
      '视频回传：64Kbps-9.6Kbps 分档可变',
      '短消息：最长 1000 字',
    ],
  },
  {
    id: 'vehicle-inspector',
    name: '车检设备',
    shortDesc: '专业汽车故障检修仪器，覆盖诊断与 ADAS 校准。',
    image: 'https://picsum.photos/900/600?random=35',
    tags: ['汽车诊断', 'ADAS', '故障检修'],
    devCycle: '3.5个月',
    applications: ['汽车厂家', '4S店', '维修店'],
    detail:
      '专业的汽车故障检修仪器，集读码、清码、诊断、接车管理、客户服务与 ADAS 校准于一体，助力汽车厂家、4S 店与维修店高效完成车辆检测与维修作业。',
    specs: [
      '功能：读码、清码、诊断',
      '管理：接车管理、客户服务',
      '校准：ADAS 高级驾驶辅助系统',
    ],
  },
  {
    id: 'id-reader',
    name: '身份证识别终端',
    shortDesc: '专用身份证读取设备，适用于警务安检与实名制管理。',
    image: 'https://picsum.photos/900/600?random=36',
    tags: ['身份证读取', '实名制', '安检核验'],
    devCycle: '2.5个月',
    applications: ['警务安检', '实名制管理', '政务机构', '重要会议', '人口普查'],
    detail:
      '专为身份核验场景设计，快速读取身份证信息并完成比对验证，广泛用于警务安检、政务办事、会议签到与人口普查等场景，提升身份管理效率与安全性。',
    specs: [
      '能力：快速身份证信息读取与核验',
      '场景：警务、政务、会议、普查',
      '特点：即扫即验、安全可靠',
    ],
  },
  {
    id: 'public-private-radio',
    name: '公专网对讲终端',
    shortDesc: '支持公网/专网/模拟三模对讲，满足多场景调度需求。',
    image: 'https://picsum.photos/900/600?random=37',
    tags: ['公专网对讲', '三模对讲', '指挥调度'],
    devCycle: '2.5个月',
    applications: ['物流货运', '城市管理', '医疗急救', '公安部队'],
    detail:
      '支持网络对讲、硬件 DMR 对讲与模拟对讲三种模式。公网对讲机可实现远程指挥调度，专网对讲机支持自由组网、安全稳定。可定制指纹解锁、手势唤醒、手套触摸、OTG 等扩展功能。',
    specs: [
      '模式：公网/专网/模拟三模对讲',
      '公网：远程指挥调度',
      '专网：自由组网、安全稳定',
      '扩展：指纹解锁、手势唤醒、手套触摸、OTG',
    ],
  },
  {
    id: 'explosion-proof-radio',
    name: '防爆对讲机',
    shortDesc: '面向化工与粉尘易燃场景的防爆对讲设备。',
    image: 'https://picsum.photos/900/600?random=38',
    tags: ['防爆场景', '粉尘易燃', '安全通信'],
    devCycle: '2.5个月',
    applications: ['化工厂', '油轮货场', '加油站', '粉尘易燃场所'],
    detail:
      '专为燃料化学品生产运输、可燃性粉尘场所设计，满足严苛防爆标准。支持指纹解锁、手势唤醒、手套触摸、OTG 等扩展功能，保障高风险环境下的即时通信安全。',
    specs: [
      '认证：防爆等级认证',
      '适用：化工、油轮、加油站、粉尘场所',
      '扩展：指纹解锁、手势唤醒、手套触摸、OTG',
    ],
  },
  {
    id: 'high-precision-gps',
    name: '高精度定位设备',
    shortDesc: '融合北斗/GPS/GLONASS 多模卫星，提供亚米级/厘米级定位。',
    image: 'https://picsum.photos/900/600?random=39',
    tags: ['高精定位', '多模卫星', '轨迹管理'],
    devCycle: '3个月',
    applications: ['物流快递', '生产制造', '公共事业', '医药农牧'],
    detail:
      '适用于人员定位、车辆管理、资产追踪等业务，支持轨迹记录、电子围栏和异常预警，帮助客户提升运营效率与安全管理水平。',
    specs: [
      '卫星：北斗 + GPS + GLONASS',
      '频率：B1(1.561GHz) / L1(1.575GHz) / L1(1.602GHz)',
      '通道：31 Channel',
      '灵敏度：-130dB（SNR 40dBHz）',
    ],
  },
  {
    id: 'smart-pigeon-ring',
    name: '智能定位鸽环',
    shortDesc: '面向竞翔行业的 GPS 实时定位产品，支持多端协同管理。',
    image: 'https://picsum.photos/900/600?random=40',
    tags: ['鸽环定位', '实时追踪', 'APP/小程序'],
    devCycle: '4个月',
    applications: ['农牧竞翔', '赛鸽管理', '轨迹分析'],
    detail:
      '专为广大鸽友与竞翔场景设计，实时采集并回传赛鸽飞行位置、速度等关键数据，支持后台、APP 与小程序统一管理，助力竞翔训练与赛事管理。',
    specs: [
      '产品形态：定位器 + 后台 + APP + 小程序',
      '能力：实时定位、速度回传、轨迹查询',
      '场景：竞翔训练与赛事管理',
    ],
  },
    {
    id: 'elderly-locator',
    name: '老人定位求助器',
    shortDesc: '集成 GPS/北斗定位与 SOS 一键求助，支持小程序远程看护与电子围栏。',
    image: 'https://picsum.photos/900/600?random=35',
    tags: ['老人定位', 'SOS求助', '北斗GPS', '电子围栏'],
    devCycle: '2个月',
    applications: ['居家养老', '社区看护', '机构养老', '户外出行'],
    detail:
      '面向老年人安全看护场景，集 GPS/北斗双模定位、SOS 一键求助、语音通话于一体。家属可通过小程序实时查看位置、设置紧急联系人、划定电子围栏并查询历史足迹，全方位保障老人出行安全。',
    specs: [
      '定位：GPS + 北斗双模定位',
      '功能：SOS 求助、语音通话',
      '管理：小程序查看位置、设置紧急联系人',
      '安全：电子围栏、足迹查询与异常预警',
    ],
  },
  {
    id: 'smart-scenic',
    name: '智慧景区一体化方案',
    shortDesc: '“智能设备 + 管理平台”一体化，提升景区服务与运营效率。',
    image: 'https://picsum.photos/900/600?random=35',
    tags: ['智慧文旅', '统一平台', '运营提效'],
    devCycle: '3个月',
    applications: ['智慧导览', '景区运营', '政府监管'],
    detail:
      '基于“终端设备 + 中台系统 + 应用服务”架构，覆盖游客服务、人员调度、设备管理与运营分析，助力景区数字化升级。',
    specs: ['设备：CAT.1 通讯 + 北斗 + GPS', '平台：Java 云端部署（B/S）', '价值：服务提升、运营降本增效'],
  }
]


export const certificates = [
  // ==================== 实用新型专利 ×3 ====================
  {
    type: '实用新型专利',
    name: '一种基于4G网络和北斗短报文的GPS定位器',
    number: 'ZL 2022 2 1320670.8',
    certNo: '第17746627号',
    date: '2022-11-08',       // 授权公告日
    inventors: '贺伟;曹远明;钟珏成',
    owner: '深圳乐心信息技术有限公司',
    publishNo: 'CN 217766855 U',
    source: '16B123ALJRAE6B66.pdf',
    image: 'patent-4g-beidou-gps.jpg',
  },
  {
    type: '实用新型专利',
    name: '一种适用于鸽子轨迹检测的GPS定位器',
    number: 'ZL 2022 2 2946941.7',
    certNo: '第18709876号',
    date: '2023-03-24',
    inventors: '贺伟;曹远明;钟珏成',
    owner: '深圳乐心信息技术有限公司',
    publishNo: 'CN 218728036 U',
    source: '2023-03-24-实用新型专利证书-2022229469417.pdf',
    image: 'patent-pigeon-gps.jpg',
  },
  {
    type: '实用新型专利',
    name: '一种基于NB网络的微型北斗定位器',
    number: 'ZL 2023 2 0950873.3',
    certNo: '第19819618号',
    date: '2023-10-13',
    inventors: '贺伟;曹远明;钟珏成',
    owner: '深圳乐心信息技术有限公司',
    publishNo: 'CN 219831401 U',
    source: '2023-10-13-实用新型专利证书-2023209508733.pdf',
    image: 'patent-nb-beidou-mini.jpg',
  },

  // ==================== 发明专利 ×1 ====================
  {
    type: '发明专利',
    name: '一种基于GNSS信号非连续跟踪的导航方法',
    number: 'ZL 2021 1 0965457.6',
    certNo: '第6892080号',
    date: '2024-04-12',
    inventors: '朱青永',
    owner: '深圳乐心信息技术有限公司',
    publishNo: 'CN 113687392 B',
    source: '2021109654576_发明专利证书_20240412.pdf',
    image: 'patent-gnss-navigation.jpg',
  },

  // ==================== 外观设计专利 ×1 ====================
  {
    type: '外观设计专利',
    name: '鸽子实时GPS定位器',
    number: 'ZL 2022 3 0522259.8',
    certNo: '第7711109号',
    date: '2022-11-25',
    inventors: '贺伟;曹远明;钟珏成',
    owner: '深圳乐心信息技术有限公司',
    publishNo: 'CN 307690201 S',
    source: '16BJ1TRF4J335C92.pdf',
    image: 'patent-pigeon-gps-design.jpg',
  },
  // ==================== 企业资质 ×1 ====================
  {
    type: '国家高新技术企业',
    name: '国家高新技术企业证书',
    number: 'GR202444200830',
    certNo: 'GR202444200830',
    date: '2024-12-26',
    owner: '深圳乐心信息技术有限公司',
    source: '国高证书2024.jpg',
    image: 'cert-high-tech-enterprise.jpg',
  },
  // ==================== 软件著作权 ×3 ====================
  {
    type: '软件著作权',
    name: '手持北斗短报文设备数据回传系统 V1.0',
    number: '2023SR0462757',
    certNo: '软著登字第11049928号',
    date: '2023-04-12',
    owner: '深圳乐心信息技术有限公司',
    rightType: '原始取得',
    source: '2023-04-12深圳乐心信息技术有限公司2证书(1).pdf（第1页）',
    image: 'soft-beidou-data-upload.jpg',
  },
  // {
  //   type: '软件著作权',
  //   name: '北斗卫星通讯智能终端数据上传软件 V1.0',
  //   number: '2023SR0462054',
  //   certNo: '软著登字第11049225号',
  //   date: '2023-04-12',
  //   owner: '深圳乐心信息技术有限公司',
  //   rightType: '原始取得',
  //   source: '2023-04-12深圳乐心信息技术有限公司2证书(1).pdf（第2页）',
  // },
  {
    type: '软件著作权',
    name: '设备实时数据传输系统 V1.0',
    number: '2024SR0586490',
    certNo: '软著登字第12990363号',
    date: '2024-04-29',
    owner: '深圳乐心信息技术有限公司',
    rightType: '原始取得',
    source: '软著设备实时数据传输系统.pdf',
    image: 'soft-realtime-data-transfer.jpg',
  },
  {
    type: '软件著作权',
    name: '智能软硬件集成数据处理一体化服务平台 V1.0',
    number: '2024SR2175622',
    certNo: '软著登字第14579495号',
    date: '2024-12-24',
    owner: '深圳乐心信息技术有限公司',
    rightType: '受让取得',
    source: '智能软硬件集成数据处理一体化服务平台.pdf',
    image: 'soft-integrated-data-platform.jpg',
  }
]
