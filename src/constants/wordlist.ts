
export const WORDS: string[] = [
  '丞', '乖', '乘', '乩', '乳', '乾', '亂', '予', '些', '亟',
  '亨', '享', '京', '亭', '亮', '今', '仞', '令', '仰', '仳',
  '份', '仿', '伉', '估', '伴', '伶', '伺', '伽', '但', '佇',
  '低', '佐', '佑', '佔', '何', '佗', '余', '佝', '佞', '你',
  '佩', '佬', '佯', '佰', '佳', '併', '佻', '佾', '侃', '來',
  '侈', '例', '侍', '侏', '侖', '供', '侮', '侯', '侵', '侶',
  '係', '促', '俊', '俎', '俏', '俐', '俑', '俗', '俘', '保',
  '俞', '俟', '俠', '修', '俯', '俱', '俸', '俺', '倆', '倉',
  '個', '倌', '倍', '倏', '倒', '倔', '倘', '候', '倚', '借',
  '倡', '倣', '倥', '倦', '倨', '倩', '倪', '倫', '倭', '值',
  '偃', '假', '偉', '偌', '偎', '偏', '偕', '做', '停', '健',
  '側', '偵', '偷', '偺', '傅', '傍', '傑', '傖', '傘', '備',
  '傢', '催', '傯', '傲', '傳', '債', '傷', '傻', '傾', '像',
  '僑', '僕', '僖', '僚', '僥', '僧', '僭', '僮', '僱', '僵',
  '價', '僻', '儀', '儂', '億', '儈', '儉', '儐', '儒', '儔',
  '儘', '償', '儡', '優', '儲', '儷', '儼', '兇', '光', '克',
  '兌', '兔', '兗', '兜', '兢', '兩', '冀', '冕', '冠', '冤',
  '冥', '冶', '冷', '冽', '凋', '凌', '凜', '凝', '凰', '凱',
  '凳', '函', '刑', '判', '別', '刨', '刮', '刷', '券', '剁',
  '剃', '削', '剋', '前', '剎', '剔', '剖', '剛', '剜', '剝',
  '剩', '剪', '副', '割', '剴', '創', '剷', '剽', '剿', '劃',
  '劇', '劈', '劉', '劍', '劣', '努', '劫', '劬', '勁', '勃',
  '勇', '勉', '勗', '勘', '務', '勛', '勝', '勞', '募', '勢',
  '勦', '勵', '勸', '匈', '匏', '匐', '匙', '匯', '匱', '匾',
  '匿', '區', '卒', '卓', '協', '博', '卡', '卦', '卮', '危',
  '卵', '卷', '卹', '卻', '卿', '厚', '厝', '原', '厥', '厭',
  '厲', '參', '叔', '受', '叛', '叟', '叢', '司', '叼', '吃',
  '合', '同', '后', '向', '吞', '吟', '吩', '含', '吭', '吮',
  '吱', '吳', '吵', '吹', '吼', '呂', '呃', '呈', '呎', '呢',
  '周', '呵', '呶', '呸', '命', '咄', '咆', '咎', '咐', '咒',
  '咕', '咖', '咚', '咨', '咫', '咬', '咯', '咸', '咻', '咽',
  '哀', '品', '哄', '哇', '哈', '哉', '哎', '哥', '哨', '哪',
  '哭', '哮', '哲', '哼', '唆', '唉', '唐', '唔', '唧', '唬',
  '唱', '唳', '唷', '唸', '啃', '商', '啊', '啕', '啖', '啜',
  '啟', '啣', '啦', '啪', '啻', '啼', '啾', '喀', '喂', '喃',
  '善', '喇', '喉', '喊', '喋', '喔', '喘', '喚', '喜', '喝',
  '喟', '喧', '喪', '喬', '喱', '喲', '喳', '喻', '嗅', '嗆',
  '嗇', '嗑', '嗓', '嗜', '嗟', '嗡', '嗣', '嗤', '嗥', '嗦',
  '嗨', '嗯', '嗷', '嗽', '嗾', '嘀', '嘉', '嘎', '嘔', '嘖',
  '嘗', '嘛', '嘟', '嘩', '嘮', '嘯', '嘰', '嘲', '嘴', '嘶',
  '嘹', '嘻', '噎', '噓', '噗', '噙', '噢', '噤', '噥', '器',
  '噩', '噪', '噫', '噬', '噯', '噱', '噴', '噸', '噹', '嚀',
  '嚅', '嚇', '嚎', '嚏', '嚐', '嚕', '嚥', '嚮', '嚴', '嚶',
  '嚷', '嚼', '囀', '囁', '囂', '囈', '囉', '囊', '囌', '囑',
  '囪', '固', '圈', '國', '圍', '園', '圓', '圖', '團', '在',
  '圬', '均', '坊', '坎', '坐', '坑', '坦', '坪', '坷', '型',
  '垢', '垣', '垮', '埃', '城', '域', '埠', '執', '培', '基',
  '堂', '堅', '堡', '堤', '堪', '堯', '堰', '報', '場', '堵',
  '塌', '塑', '塔', '塗', '塘', '塚', '塞', '填', '塭', '塵',
  '塹', '塾', '墀', '境', '墅', '墊', '墓', '墜', '增', '墟',
  '墮', '墳', '墾', '壁', '壅', '壇', '壑', '壓', '壕', '壘',
  '壙', '壞', '壢', '壤', '壩', '壹', '壽', '夏', '夔', '夜',
  '夠', '夢', '夤', '夥', '夸', '夾', '奇', '奎', '奏', '奐',
  '契', '奔', '奕', '奘', '奚', '奠', '奢', '奧', '奩', '奪',
  '奮', '妁', '妄', '妍', '妓', '妖', '妙', '妣', '妤', '妨',
  '妮', '妳', '始', '姑', '姘', '姚', '姣', '姥', '姦', '姻',
  '姿', '威', '娃', '娑', '娓', '娘', '娛', '娜', '娟', '娠',
  '娣', '娩', '娶', '娼', '婀', '婆', '婉', '婊', '婚', '婦',
  '婪', '婷', '婿', '媒', '媚', '媛', '媲', '媳', '媼', '媾',
  '嫁', '嫂', '嫉', '嫖', '嫗', '嫘', '嫡', '嫣', '嫦', '嫩',
  '嫵', '嫻', '嬉', '嬌', '嬝', '嬤', '嬪', '嬰', '嬴', '嬸',
  '孀', '存', '孫', '孰', '孱', '孳', '孵', '學', '孺', '孽',
  '孿', '完', '宏', '定', '宛', '客', '宣', '宥', '宮', '宰',
  '害', '宴', '宵', '宸', '容', '宿', '寂', '寄', '寅', '密',
  '寇', '富', '寐', '寒', '寞', '察', '寡', '寢', '寤', '寥',
  '實', '寧', '寨', '審', '寫', '寬', '寮', '寶', '封', '將',
  '尉', '尊', '尋', '對', '導', '尚', '尬', '就', '尷', '局',
  '屁', '居', '屆', '屈', '屍', '屏', '屐', '屑', '展', '屜',
  '屠', '層', '履', '屬', '屹', '岐', '岑', '岔', '岡', '岱',
  '岸', '峙', '峪', '峭', '峰', '峻', '峽', '崁', '崆', '崇',
  '崎', '崑', '崖', '崙', '崛', '崢', '崩', '嵌', '嵐', '嵩',
  '嶄', '嶇', '嶝', '嶺', '嶼', '嶽', '巍', '巒', '巔', '巖',
  '巫', '差', '巷', '巽', '帆', '希', '帑', '帖', '帘', '帚',
  '帝', '帥', '師', '席', '常', '帽', '幀', '幅', '幌', '幔',
  '幕', '幗', '幛', '幟', '幢', '幣', '幫', '幹', '幽', '幾',
  '庇', '序', '底', '庖', '店', '府', '度', '座', '庭', '庵',
  '庶', '廁', '廂', '廈', '廊', '廓', '廖', '廚', '廝', '廟',
  '廠', '廢', '廣', '廬', '延', '廷', '弈', '弊', '弒', '弟',
  '弦', '弩', '弱', '強', '弼', '彆', '彌', '彎', '彗', '彙',
  '彞', '形', '彥', '彩', '彪', '彫', '彬', '彭', '彰', '影',
  '彷', '役', '征', '待', '徇', '徊', '後', '徐', '徑', '徒',
  '得', '徙', '從', '御', '徨', '復', '循', '徬', '微', '徵',
  '德', '徹', '徽', '忍', '忘', '忙', '忝', '念', '忿', '怒',
  '怔', '怖', '怠', '怡', '急', '怨', '怪', '怯', '怵', '恃',
  '恍', '恐', '恕', '恢', '恣', '恤', '恩', '恪', '恫', '恬',
  '恭', '恰', '恿', '悄', '悅', '悌', '悍', '悔', '悖', '悟',
  '悠', '您', '悴', '悸', '悻', '悼', '情', '惆', '惋', '惑',
  '惕', '惘', '惚', '惜', '惦', '惰', '惱', '想', '惴', '惶',
  '惹', '惺', '惻', '愀', '愁', '愈', '愉', '愎', '意', '愕',
  '愛', '愜', '感', '愣', '愴', '愾', '愿', '慄', '慇', '慈',
  '態', '慌', '慍', '慎', '慕', '慘', '慚', '慝', '慟', '慢',
  '慣', '慧', '慨', '慫', '慮', '慰', '慶', '慷', '慼', '慾',
  '憂', '憊', '憎', '憐', '憑', '憔', '憤', '憧', '憩', '憫',
  '憬', '憲', '憶', '憾', '懂', '懇', '懈', '應', '懊', '懍',
  '懣', '懦', '懲', '懵', '懶', '懷', '懸', '懺', '懼', '懾',
  '懿', '戀', '或', '戚', '戛', '戟', '戡', '戢', '截', '戮',
  '戲', '戳', '戴', '房', '扈', '扮', '扳', '批', '扼', '技',
  '抄', '抑', '抒', '投', '抖', '抗', '抨', '抬', '抱', '抵',
  '拈', '拋', '拌', '拎', '拐', '拒', '拔', '拖', '拗', '拘',
  '拙', '拚', '招', '拜', '括', '拭', '拮', '拯', '拱', '拳',
  '拴', '拷', '拼', '拾', '拿', '持', '指', '挈', '按', '挑',
  '挖', '挨', '挪', '挫', '振', '挺', '挽', '挾', '捂', '捆',
  '捉', '捎', '捏', '捐', '捧', '捨', '捩', '捱', '捲', '捻',
  '掀', '掃', '掄', '授', '掉', '掌', '掏', '掖', '掘', '掙',
  '掛', '掠', '採', '探', '掣', '接', '控', '掩', '措', '掬',
  '揀', '揆', '揉', '揍', '描', '提', '插', '揖', '揚', '換',
  '握', '揣', '揩', '揪', '揭', '揮', '援', '損', '搏', '搓',
  '搔', '搖', '搗', '搜', '搞', '搪', '搬', '搭', '搶', '搽',
  '搾', '摑', '摒', '摔', '摘', '摧', '摩', '摯', '摸', '摹',
  '摺', '撇', '撈', '撐', '撒', '撓', '撕', '撚', '撞', '撤',
  '撥', '撩', '撫', '撬', '播', '撮', '撰', '撲', '撻', '撼',
  '撿', '擁', '擂', '擄', '擅', '擇', '擊', '擋', '操', '擎',
  '擒', '擔', '擘', '據', '擦', '擬', '擰', '擱', '擲', '擴',
  '擺', '擻', '擾', '攀', '攆', '攔', '攘', '攙', '攜', '攝',
  '攣', '攤', '攪', '攫', '攬', '放', '政', '故', '效', '敏',
  '敖', '敘', '教', '敞', '散', '敦', '敬', '敲', '整', '敵',
  '敷', '斂', '斃', '斑', '料', '斜', '斟', '斡', '斯', '新',
  '斷', '於', '施', '旁', '旅', '旋', '旌', '旎', '族', '旖',
  '旗', '昀', '昂', '昆', '昭', '是', '時', '晃', '晉', '晌',
  '晏', '晚', '晤', '晦', '晨', '普', '景', '晰', '晴', '晶',
  '智', '暇', '暈', '暉', '暑', '暖', '暗', '暢', '暨', '暫',
  '暮', '暴', '暹', '曆', '曉', '曖', '曙', '曝', '曠', '曷',
  '曼', '曾', '替', '最', '會', '服', '朔', '朕', '朗', '望',
  '朝', '期', '朦', '杭', '松', '板', '枇', '枋', '枝', '枯',
  '枴', '架', '枸', '染', '查', '柩', '柯', '柳', '柴', '柿',
  '栓', '校', '株', '格', '栽', '桀', '桂', '桃', '桅', '框',
  '案', '桌', '桐', '桑', '桓', '桔', '桶', '桿', '梁', '梃',
  '梅', '梆', '梓', '梔', '條', '梢', '梧', '梨', '梭', '梯',
  '械', '梱', '梳', '梵', '棉', '棋', '棍', '棒', '棕', '棚',
  '棠', '棧', '森', '棹', '棺', '椅', '植', '椒', '椰', '楊',
  '楓', '楔', '楚', '楞', '楠', '楨', '楫', '業', '極', '楷',
  '楹', '概', '榆', '榔', '榕', '榛', '榜', '榨', '榫', '榭',
  '榮', '榴', '榻', '槁', '構', '槌', '槍', '槓', '槨', '槳',
  '樁', '樂', '樅', '樊', '標', '樞', '樟', '模', '樣', '樵',
  '樸', '樹', '樺', '樽', '橄', '橇', '橋', '橘', '橙', '機',
  '橡', '橢', '橫', '檀', '檄', '檔', '檜', '檢', '檬', '檳',
  '檸', '檻', '櫂', '櫃', '櫓', '櫚', '櫛', '櫝', '櫥', '櫻',
  '欄', '權', '欖', '次', '欣', '欲', '欺', '欽', '款', '歇',
  '歉', '歌', '歐', '歙', '歟', '歡', '武', '歧', '歪', '歲',
  '歷', '歸', '歿', '殆', '殉', '殊', '殖', '殘', '殤', '殮',
  '殯', '殲', '段', '殷', '殺', '殼', '殿', '毀', '毅', '毆',
  '毓', '毗', '毫', '毯', '毽', '氓', '氛', '氤', '氨', '氫',
  '氮', '氯', '氳', '汰', '汾', '沃', '沅', '沉', '沒', '沙',
  '沱', '河', '治', '沼', '沽', '沾', '沿', '況', '泅', '泓',
  '法', '泗', '泛', '泡', '泥', '洌', '洗', '洛', '洞', '洪',
  '洶', '活', '洽', '派', '流', '浙', '浚', '浩', '浪', '浮',
  '浴', '海', '浸', '涇', '消', '涉', '涎', '涓', '涕', '涮',
  '涯', '液', '涵', '涸', '涼', '淄', '淅', '淆', '淇', '淋',
  '淌', '淑', '淘', '淙', '淚', '淞', '淡', '淤', '淨', '淪',
  '淫', '深', '淳', '淵', '混', '淹', '淺', '添', '清', '渙',
  '渚', '減', '渝', '渠', '渡', '渣', '渤', '渥', '渦', '測',
  '渭', '港', '渲', '渴', '游', '渺', '渾', '湃', '湊', '湍',
  '湔', '湖', '湘', '湛', '湧', '湮', '湯', '溉', '源', '準',
  '溘', '溜', '溝', '溢', '溥', '溪', '溫', '溯', '溶', '溺',
  '溼', '滂', '滄', '滅', '滇', '滋', '滌', '滑', '滓', '滔',
  '滬', '滲', '滴', '滾', '滿', '漁', '漂', '漆', '漏', '漓',
  '演', '漠', '漣', '漩', '漪', '漫', '漬', '漯', '漱', '漲',
  '漳', '漸', '漾', '漿', '潑', '潔', '潘', '潛', '潤', '潦',
  '潭', '潮', '潰', '潸', '潺', '潼', '澀', '澄', '澆', '澈',
  '澎', '澗', '澡', '澤', '澧', '澱', '澳', '澹', '激', '濁',
  '濂', '濃', '濘', '濛', '濠', '濡', '濤', '濫', '濬', '濯',
  '濱', '濺', '濾', '瀆', '瀉', '瀋', '瀏', '瀑', '瀕', '瀚',
  '瀛', '瀝', '瀟', '瀨', '瀰', '瀾', '灌', '灑', '灘', '灣',
  '灤', '灼', '炊', '炒', '炕', '炫', '炬', '炭', '炮', '炯',
  '烈', '烘', '烙', '烤', '烹', '烽', '焉', '焊', '焙', '焚',
  '焰', '然', '煉', '煌', '煎', '煙', '煜', '煞', '煤', '煥',
  '煦', '照', '煩', '煬', '煮', '煽', '熄', '熊', '熔', '熙',
  '熟', '熨', '熬', '熱', '熹', '熾', '燃', '燄', '燈', '燉',
  '燎', '燐', '燒', '燕', '燙', '燜', '營', '燥', '燦', '燧',
  '燬', '燭', '燮', '燴', '爆', '爍', '爐', '爛', '爨', '爰',
  '爵', '爹', '爺', '爽', '爾', '牆', '版', '牒', '牖', '牘',
  '牯', '牴', '特', '犀', '犁', '犄', '犒', '犖', '犛', '犢',
  '狗', '狡', '狩', '狷', '狹', '狼', '猖', '猙', '猛', '猜',
  '猥', '猩', '猴', '猶', '猷', '猾', '猿', '獄', '獅', '獎',
  '獐', '獗', '獨', '獰', '獲', '獵', '獷', '獸', '獺', '獻',
  '玀', '率', '玩', '玲', '玳', '玷', '珍', '珠', '班', '珮',
  '琅', '琉', '琊', '琍', '琥', '琪', '琳', '琴', '琵', '琶',
  '琺', '琿', '瑁', '瑕', '瑙', '瑚', '瑛', '瑜', '瑞', '瑟',
  '瑣', '瑤', '瑩', '瑯', '璃', '璋', '璜', '璣', '璦', '璧',
  '璩', '環', '璽', '瓊', '瓠', '瓢', '瓣', '瓶', '瓷', '甄',
  '甌', '甕', '甚', '甜', '產', '甥', '甬', '界', '畏', '畔',
  '留', '畚', '畜', '畝', '略', '畦', '畫', '異', '當', '畸',
  '疆', '疇', '疊', '疏', '疑', '疙', '疥', '疫', '疵', '疹',
  '疼', '疾', '症', '痊', '痔', '痘', '痙', '痛', '痞', '痢',
  '痣', '痰', '痲', '痴', '痿', '瘀', '瘁', '瘉', '瘋', '瘍',
  '瘓', '瘟', '瘠', '瘡', '瘤', '瘦', '瘧', '瘩', '瘴', '瘸',
  '療', '癆', '癌', '癒', '癖', '癘', '癢', '癥', '癩', '癬',
  '癮', '癱', '癲', '癸', '登', '發', '的', '皆', '皈', '皎',
  '皓', '皖', '皚', '皰', '皴', '皺', '盆', '盈', '益', '盍',
  '盒', '盔', '盛', '盜', '盞', '盟', '盡', '監', '盤', '盥',
  '盧', '盪', '盲', '盼', '盾', '省', '真', '眨', '眩', '眶',
  '眷', '眸', '眺', '眾', '睏', '睛', '睜', '睞', '督', '睦',
  '睨', '睪', '睬', '睹', '睽', '睿', '瞄', '瞇', '瞌', '瞎',
  '瞑', '瞞', '瞟', '瞠', '瞥', '瞧', '瞪', '瞬', '瞭', '瞰',
  '瞳', '瞻', '瞽', '瞿', '矇', '矗', '矚', '矜', '矣', '知',
  '矩', '短', '矮', '矯', '砂', '砌', '砍', '研', '砝', '砥',
  '砧', '砭', '砰', '砸', '硃', '硝', '硫', '硼', '碉', '碌',
  '碎', '碗', '碟', '碧', '碩', '碰', '碳', '碾', '磁', '磅',
  '磊', '磋', '磐', '磕', '磚', '磨', '磬', '磯', '磴', '磷',
  '磺', '礁', '礎', '礙', '礦', '礪', '礫', '礬', '祆', '祐',
  '祗', '祝', '祟', '祠', '祭', '祺', '祿', '禁', '禍', '禎',
  '福', '禦', '禧', '禮', '禱', '禽', '科', '秒', '秤', '移',
  '稀', '稅', '稈', '程', '稍', '稔', '稜', '稟', '稠', '稱',
  '稷', '稻', '稼', '稽', '稿', '穀', '穆', '穌', '積', '穎',
  '穗', '穡', '穢', '穩', '穫', '究', '穹', '空', '穿', '突',
  '窄', '窈', '窒', '窕', '窖', '窗', '窘', '窟', '窠', '窩',
  '窪', '窮', '窯', '窺', '竄', '竅', '竇', '竊', '站', '竟',
  '章', '竣', '竭', '端', '競', '笑', '笞', '符', '第', '等',
  '筋', '筍', '筏', '筐', '筒', '答', '筠', '筵', '筷', '箋',
  '箏', '箔', '箕', '算', '箝', '管', '箭', '箱', '箴', '節',
  '篁', '範', '篆', '篇', '築', '篙', '篛', '篡', '篩', '篷',
  '篾', '簇', '簑', '簡', '簣', '簧', '簪', '簫', '簷', '簸',
  '簽', '簾', '簿', '籃', '籌', '籍', '籐', '籟', '籤', '籬',
  '籮', '籲', '粉', '粥', '粱', '粵', '粹', '粽', '精', '糊',
  '糕', '糖', '糙', '糜', '糞', '糠', '糢', '糧', '糯', '約',
  '紇', '紉', '紕', '紗', '紛', '紜', '紡', '索', '紫', '紮',
  '紹', '絀', '終', '絃', '絆', '結', '絕', '絞', '絡', '絢',
  '給', '絨', '絮', '統', '絹', '綁', '綏', '綑', '經', '綜',
  '綠', '綢', '綰', '綱', '網', '綴', '綵', '綸', '綺', '綻',
  '綽', '綾', '綿', '緇', '緊', '緒', '緘', '線', '緝', '緞',
  '締', '緣', '編', '緩', '緯', '練', '緻', '縈', '縊', '縛',
  '縣', '縫', '縮', '縱', '縲', '總', '績', '繁', '繃', '繅',
  '繆', '織', '繕', '繚', '繞', '繡', '繪', '繫', '繭', '繹',
  '繼', '繽', '纂', '續', '纏', '纓', '纖', '纜', '罄', '罈',
  '罐', '罔', '罕', '罟', '罩', '置', '罰', '署', '罷', '罹',
  '羅', '羈', '羋', '羚', '羞', '群', '羨', '羯', '羶', '羸',
  '羹', '翁', '翅', '翎', '翕', '翠', '翩', '翰', '翱', '翳',
  '翹', '翻', '翼', '耀', '耆', '耘', '聆', '聊', '聘', '聚',
  '聯', '聰', '聱', '聲', '聳', '聶', '職', '聽', '肄', '肇',
  '肓', '股', '肢', '肪', '肱', '肴', '背', '胎', '胖', '胚',
  '胞', '胡', '胤', '胥', '胭', '胱', '胳', '胴', '胸', '能',
  '脂', '脅', '脆', '脈', '脊', '脖', '脣', '脩', '脫', '腋',
  '腎', '腐', '腑', '腔', '腕', '腥', '腦', '腮', '腰', '腱',
  '腳', '腸', '腹', '腺', '腿', '膀', '膈', '膊', '膏', '膚',
  '膛', '膜', '膝', '膠', '膨', '膩', '膳', '膺', '膽', '膾',
  '膿', '臀', '臂', '臃', '臆', '臉', '臏', '臘', '臚', '臟',
  '臧', '臨', '臺', '臻', '舅', '與', '興', '舉', '舊', '舍',
  '舐', '舒', '舔', '舜', '舞', '舨', '航', '舫', '般', '舵',
  '舷', '船', '艇', '艘', '艙', '艦', '芍', '芒', '芟', '芥',
  '芬', '花', '芳', '芻', '苑', '苓', '苔', '苛', '苞', '苟',
  '苣', '若', '苦', '苧', '茁', '范', '茄', '茗', '茫', '茱',
  '茲', '茴', '茵', '茶', '茹', '荀', '草', '荊', '荐', '荒',
  '荔', '荷', '荸', '荻', '荼', '莉', '莊', '莎', '莒', '莓',
  '莖', '莘', '莞', '莠', '莢', '莫', '莽', '菁', '菅', '菊',
  '菌', '菜', '菠', '菩', '華', '菰', '菱', '菴', '菸', '菽',
  '萃', '萄', '萊', '萌', '萍', '萎', '萱', '萵', '萼', '落',
  '葉', '著', '葛', '葡', '葦', '葩', '葫', '葬', '葵', '葷',
  '蒂', '蒙', '蒜', '蒞', '蒲', '蒸', '蒼', '蒿', '蓀', '蓄',
  '蓆', '蓉', '蓋', '蓓', '蓬', '蓮', '蓿', '蔑', '蔓', '蔔',
  '蔗', '蔚', '蔡', '蔣', '蔥', '蔬', '蔭', '蔽', '蕃', '蕈',
  '蕉', '蕊', '蕙', '蕨', '蕩', '蕪', '蕭', '蕾', '薄', '薇',
  '薑', '薔', '薛', '薜', '薩', '薪', '薯', '藉', '藍', '藏',
  '藐', '藕', '藝', '藤', '藥', '藩', '藪', '藹', '藺', '藻',
  '蘆', '蘇', '蘊', '蘋', '蘑', '蘗', '蘚', '蘭', '蘸', '蘿',
  '處', '虜', '虞', '號', '虧', '虱', '蚓', '蚣', '蚤', '蚩',
  '蚪', '蚵', '蛀', '蛄', '蛇', '蛋', '蛔', '蛙', '蛛', '蛟',
  '蛤', '蛹', '蛻', '蜀', '蜂', '蜃', '蜇', '蜈', '蜓', '蜘',
  '蜜', '蜢', '蜥', '蜴', '蜻', '蜿', '蝌', '蝗', '蝙', '蝠',
  '蝦', '蝨', '蝴', '蝶', '蝸', '螂', '螃', '融', '螟', '螢',
  '螫', '螳', '螺', '蟀', '蟆', '蟈', '蟋', '蟑', '蟒', '蟯',
  '蟲', '蟹', '蟻', '蠍', '蠔', '蠕', '蠟', '蠡', '蠢', '蠣',
  '蠱', '蠶', '蠹', '蠻', '術', '衰', '衷', '袁', '袈', '袋',
  '袍', '袒', '袞', '袱', '裁', '裂', '裔', '裕', '裙', '裝',
  '裟', '裳', '裹', '製', '褂', '複', '褐', '褒', '褓', '褚',
  '褥', '褪', '褫', '褲', '褶', '褻', '襄', '襖', '襟', '襠',
  '襤', '襪', '襯', '覃', '覆', '覦', '親', '覬', '覺', '覽',
  '觀', '角', '解', '觴', '觸', '訊', '訖', '訛', '訟', '訪',
  '設', '訴', '診', '註', '証', '詁', '詆', '詔', '評', '詞',
  '詢', '詣', '試', '詩', '詫', '詬', '詭', '詮', '詰', '話',
  '詹', '詼', '誇', '誌', '認', '誑', '誓', '誕', '誘', '語',
  '誠', '誡', '誣', '誤', '誥', '誦', '誨', '說', '誼', '調',
  '諂', '諄', '談', '諉', '請', '諍', '諒', '論', '諜', '諦',
  '諧', '諫', '諭', '諮', '諱', '諷', '諸', '諺', '諾', '謀',
  '謁', '謂', '謄', '謊', '謎', '謗', '講', '謝', '謠', '謨',
  '謬', '譁', '證', '譎', '譏', '識', '譚', '譜', '警', '譬',
  '譯', '議', '譴', '護', '譽', '讀', '變', '讒', '讓', '讖',
  '讚', '谷', '谿', '豁', '豆', '豈', '豉', '豌', '豎', '豐',
  '豔', '象', '豢', '豪', '豫', '豬', '豹', '貂', '貉', '貊',
  '貌', '貓', '貧', '貨', '販', '貪', '貯', '貲', '貳', '貴',
  '貶', '貸', '貼', '貽', '貿', '賀', '賁', '賂', '賄', '資',
  '賊', '賑', '賒', '賓', '賜', '賞', '賠', '賢', '賣', '賤',
  '賦', '質', '賭', '賴', '購', '賽', '贅', '贈', '贊', '贍',
  '贏', '贓', '贖', '贗', '贛', '赦', '赧', '赫', '赭', '赳',
  '赴', '起', '趁', '超', '越', '趕', '趙', '趟', '趣', '趨',
  '趴', '趾', '跆', '跋', '跎', '跑', '跚', '跛', '距', '跟',
  '跡', '跨', '跪', '路', '跳', '跺', '跼', '踏', '踐', '踝',
  '踟', '踢', '踩', '踫', '踱', '踴', '踵', '踹', '蹂', '蹄',
  '蹈', '蹉', '蹊', '蹋', '蹙', '蹣', '蹤', '蹦', '蹬', '蹲',
  '蹶', '蹺', '蹼', '躁', '躂', '躅', '躇', '躉', '躊', '躍',
  '躑', '躡', '躪', '躲', '躺', '軀', '軔', '軛', '軟', '軻',
  '軾', '較', '載', '輒', '輓', '輕', '輛', '輜', '輝', '輟',
  '輦', '輪', '輯', '輸', '輻', '輾', '輿', '轂', '轄', '轅',
  '轉', '轍', '轎', '轔', '轟', '轡', '辜', '辟', '辣', '辦',
  '辨', '辭', '辮', '辯', '辰', '辱', '農', '迄', '迅', '迎',
  '返', '迢', '迥', '迦', '迭', '述', '迴', '追', '送', '逃',
  '逅', '逆', '逍', '透', '途', '逕', '逖', '逗', '通', '逛',
  '逝', '逞', '造', '逢', '週', '逵', '逸', '逼', '逾', '遁',
  '遂', '遊', '運', '遍', '過', '遏', '遐', '遑', '道', '達',
  '違', '遘', '遙', '遜', '遞', '遠', '遣', '遨', '適', '遮',
  '遲', '遴', '遵', '遷', '選', '遺', '遼', '遽', '避', '邀',
  '邁', '邂', '還', '邇', '邊', '邏', '邐', '邕', '邢', '那',
  '邵', '邸', '郁', '郊', '郎', '郡', '部', '郭', '都', '鄂',
  '鄉', '鄒', '鄙', '鄧', '鄭', '鄰', '鄱', '鄹', '酌', '酗',
  '酩', '酪', '酵', '酷', '酸', '醃', '醇', '醉', '醋', '醒',
  '醞', '醣', '醫', '醬', '釀', '釁', '釉', '釋', '野', '量',
  '釐', '釜', '釣', '釵', '鈐', '鈔', '鈞', '鈴', '鈷', '鈸',
  '鈽', '鉋', '鉛', '鉤', '鉸', '鉻', '銅', '銓', '銖', '銘',
  '銬', '銳', '銷', '銻', '銼', '鋁', '鋅', '鋒', '鋤', '鋸',
  '鋼', '錄', '錚', '錠', '錢', '錦', '錨', '錫', '錯', '錳',
  '錶', '鍊', '鍋', '鍍', '鍛', '鍥', '鍬', '鍰', '鍵', '鎂',
  '鎊', '鎔', '鎖', '鎮', '鎳', '鏃', '鏈', '鏍', '鏑', '鏖',
  '鏗', '鏘', '鏜', '鏝', '鏟', '鏡', '鏢', '鏽', '鐃', '鐘',
  '鐮', '鐲', '鐳', '鐵', '鐸', '鐺', '鑄', '鑑', '鑒', '鑠',
  '鑣', '鑰', '鑲', '鑼', '鑽', '鑾', '鑿', '開', '閣', '閤',
  '閥', '閨', '閭', '閱', '閻', '闆', '闈', '闊', '闋', '闌',
  '闐', '闔', '關', '闢', '阜', '阪', '阮', '防', '阿', '陀',
  '附', '陋', '陌', '降', '陛', '陝', '陡', '院', '除', '陪',
  '陰', '陵', '陶', '陷', '陸', '陽', '隆', '隋', '隍', '階',
  '隔', '隕', '隘', '隙', '際', '障', '隧', '隨', '險', '隱',
  '隸', '雁', '雄', '雉', '雌', '雍', '雕', '雖', '雙', '雛',
  '雜', '雞', '離', '雲', '零', '雹', '霄', '霆', '震', '霉',
  '霎', '霑', '霓', '霖', '霜', '霞', '霧', '霪', '露', '霸',
  '霹', '霾', '靂', '靄', '靈', '靖', '靛', '靜', '靠', '靡',
  '靨', '靴', '靼', '鞋', '鞍', '鞏', '鞘', '鞠', '鞣', '鞦',
  '鞭', '韁', '韃', '韆', '韋', '韌', '韓', '韜', '韶', '韻',
  '響', '頁', '頂', '頃', '項', '順', '須', '頊', '頌', '預',
  '頑', '頒', '頓', '頗', '領', '頡', '頤', '頭', '頰', '頷',
  '頸', '頹', '頻', '顆', '題', '額', '顎', '顏', '顓', '願',
  '顛', '類', '顧', '顫', '顯', '顰', '顱', '風', '颯', '颱',
  '颳', '颶', '颺', '颼', '飄', '飭', '飯', '飲', '飴', '飼',
  '飽', '飾', '餃', '餅', '餉', '餐', '餒', '餘', '餛', '餞',
  '餡', '館', '餵', '餾', '餿', '饅', '饑', '饒', '饜', '饞',
  '馥', '馨', '駁', '駑', '駒', '駕', '駙', '駝', '駟', '駢',
  '駱', '駿', '騁', '騎', '騖', '騙', '騫', '騰', '騷', '騾',
  '驀', '驃', '驅', '驕', '驗', '驚', '驛', '驟', '驢', '驥',
  '驪', '骯', '骰', '骷', '骸', '骼', '髏', '髒', '髓', '體',
  '高', '髦', '髭', '髮', '髯', '髻', '鬃', '鬆', '鬍', '鬚',
  '鬢', '鬧', '鬨', '鬱', '鬲', '魁', '魂', '魏', '魔', '魘',
  '魚', '魯', '魷', '鮑', '鮪', '鮫', '鮮', '鯉', '鯊', '鯧',
  '鯨', '鯽', '鰍', '鰓', '鰥', '鰭', '鰱', '鰻', '鰾', '鱉',
  '鱔', '鱖', '鱗', '鱷', '鱸', '鳩', '鳳', '鳴', '鳶', '鴆',
  '鴉', '鴒', '鴕', '鴛', '鴣', '鴦', '鴨', '鴻', '鴿', '鵑',
  '鵝', '鵠', '鵡', '鵪', '鵬', '鵲', '鶉', '鶯', '鶴', '鷂',
  '鷓', '鷗', '鷥', '鷹', '鷺', '鸚', '鸞', '鹹', '鹼', '鹽',
  '鹿', '麂', '麋', '麒', '麓', '麗', '麝', '麟', '麥', '麩',
  '麴', '麵', '麻', '麼', '麾', '黃', '黍', '黎', '黏', '黔',
  '黛', '黜', '黝', '點', '黠', '黨', '黯', '黴', '黷', '鼇',
  '鼓', '鼕', '鼙', '鼬', '鼴', '鼻', '鼾', '齜', '齡', '齣',
  '齪', '齬', '齷', '龔'
]