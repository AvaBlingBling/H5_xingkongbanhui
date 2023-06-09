const res = {
    "data": {
        "content": [
            {
                "title": '进入新环境，我有点不适应？',
                "topic": '刚进入大学，完全陌生的学习和生活环境让我有些无法适应。饭菜不习惯，气候不适应，室友生活习惯不一样，过去的学习经验现在也用不上了。我时常感到孤独无助。我该怎么办？',
                "options": ['<b>A</b> 主动融入学校环境', '<b>B</b> 和父母或以往的同学加大联系', '<b>C</b> 这就是成长，所以就那样吧', '<b>D</b> 躲在自己的世界里'],
            },
            {
                "title": '当我不再是“佼佼者”',
                "topic": '上大学之前，我一直是老师和同学眼中的“佼佼者”。进入大学才发现，身边的同学都非常优秀，自己原来的优势与骄傲根本不值一提。这种巨大的落差让我无法面对。我该怎么办？',
                "options": ['<b>A</b> 不能接受，自暴自弃', '<b>B</b> 调整心态，适应环境', '<b>C</b> 接纳自己，理性看待', '<b>D</b> 合理规划，提升自己'],
            },
            {
                "title": '考试压力大，我很焦虑',
                "topic": '临近期末考试，许多课程要复习，加上英语基础差，还要备战即将到来的四级考试，这让我非常烦躁和焦虑，吃不好睡不好，越烦越没办法静下心来搞学习。我该怎么办？',
                "options": ['<b>A</b> 别无他法，任由焦虑控制自己', '<b>B</b> 用打游戏等方式拖延和逃避', '<b>C</b> 尝试理解和接纳焦躁情绪', '<b>D</b> 做好时间管理'],
            },
            {
                "title": '恋爱分手后好痛苦',
                "topic": '恋人突然毫无预兆地提出分手，并且很快又和其他人恋爱。这让我开始全面质疑两人之前的感情，并且觉得自己很无能，变得不自信，甚至影响到饮食和睡眠。我该怎么办？',
                "options": ['<b>A</b> 接受现实，好好生活，做好自己的事情', '<b>B</b> 关注前任的社交动态，沉浸过往无法自拔', '<b>C</b> 迅速开启新的恋情，用新欢掩盖旧伤', '<b>D</b> 封闭自己，再也不相信爱情'],
            },
            {
                "title": '因琐事和室友关系不和',
                "topic": '我和室友的关系不太融洽，平时都各玩各的，很少说话。他经常在我们睡觉时玩游戏弄出动静，用别人的东西也不打招呼，提醒他注意一下他还不乐意，还说我是专门找茬。我该怎么办？',
                "options": ['<b>A</b> 和室友们商量制定宿舍生活守则', '<b>B</b> 直接和他吵一架', '<b>C</b> 寻求心理咨询，促进自我成长，以便更有力量应对宿舍关系', '<b>D</b> 平时尽量呆在宿舍，宣誓自己的主权'],
            },
            {
                "title": '无法抗拒手机的诱惑',
                "topic": '这学期开始，我迷上了用手机看小说、打游戏还有刷短视频，常常一不小心就刷到凌晨两三点，作息完全紊乱，上课时常打瞌睡，和同学们的交往也变得越来越少。我该怎么办？',
                "options": ['<b>A</b> 制定每日计划，减少手机依赖', '<b>B</b> 既然无法拒绝，就抱着手机玩下去', '<b>C</b> 远离手机，眼不见心不烦', '<b>D</b> 转移注意力，找一个事物代替手机'],
            },
            {
                "title": '父母替我决定了一切',
                "topic": '我是家中的独女，从小就什么事都听父母的。原本以为等我读大学，就可以摆脱父母的控制。结果填报志愿的时候，我不想让他们失望，还是填报了父母喜欢的学校和专业。父母替我做决定，让我很痛苦，我该怎么办？',
                "options": ['<b>A</b> 百事孝为先，一定要听父母的', '<b>B</b> 父母心是好的，听父母的，少走弯路', '<b>C</b> 父母的控制很难受，少回家少联系吧', '<b>D</b> 父母的控制令人窒息，要努力追求自我'],
            },
            {
                "title": '做心理咨询会被歧视吗？',
                "topic": '最近感到自己状态很差。我想去学校心理中心看看，又有点犹豫，感觉我的问题还没有那么严重。而且万一被同学知道我去做心理咨询，他们会不会觉得我不正常，但是自己又没有好的方法应对。我需要去寻求学校心理中心的帮助吗？',
                "options": ['<b>A</b> 心理咨询就是和人聊聊天，不会有实际作用的', '<b>B</b> 需要心理咨询的人应该都是有很严重心理问题的人', '<b>C</b> 做心理咨询很丢人，万一被同学知道我就完了', '<b>D</b> 接受心理咨询是很正常的事情'],
            },
            {
                "title": '心仪的公司与我的专业不对口',
                "topic": '考研失利后，我开始加入求职大军，希望能进网络公司，但感兴趣的几家都表示近期不考虑再招我这个专业背景的员工。我因此越来越沮丧，以至于应聘时只能被动地问人家“学某某专业的要不要”，其他什么话都不敢讲。我该怎么办？',
                "options": ['<b>A</b> 屡败屡战，就不信没有企业要我', '<b>B</b> 一蹶不振，干脆躺平听天由命', '<b>C</b> 无奈回头，加入考公考研大战', '<b>D</b> 先入行，再择业，为自己积累行业经验'],
            },
            {
                "title": '我的生活真没意思',
                "topic": '我最近不知道怎么了，慢慢感觉对什么都没了兴趣，对未来没有想法，也不想和人说话，每天不是坐着发呆就是躺在床上。我该怎么办？',
                "options": ['<b>A</b> 每天做出一点点改变，必要时寻求一些外部帮助', '<b>B</b> 对自己的状态感到羞愧又着急，进入恶性循环', '<b>C</b> 我自己一定是抑郁了，会不会回不到以前了？', '<b>D</b> 前路太艰难，就这样躺平算了'],
            },
        ]
    }
}

// 建议背景图
const tips = [
    './assets/d1/tips.png',
    './assets/d2/tips.png',
    './assets/d3/tips.png',
    './assets/d4/tips.png',
    './assets/d5/tips.png',
    './assets/d6/tips.png',
    './assets/d7/tips.png',
    './assets/d8/tips.png',
    './assets/d9/tips.png',
    './assets/d10/tips.png',
]

const unlock = [
    './assets/d1/unlock.png',
    './assets/d2/unlock.png',
    './assets/d3/unlock.png',
    './assets/d4/unlock.png',
    './assets/d5/unlock.png',
    './assets/d6/unlock.png',
    './assets/d7/unlock.png',
    './assets/d8/unlock.png',
    './assets/d9/unlock.png',
    './assets/d10/unlock.png',
]

// 背景图
const background = [
    './assets/d1/bg.gif',
    './assets/d2/bg.gif',
    './assets/d3/bg.gif',
    './assets/d4/bg.gif',
    './assets/d5/bg.gif',
    './assets/d6/bg.gif',
    './assets/d7/bg.gif',
    './assets/d8/bg.gif',
    './assets/d9/bg.gif',
    './assets/d10/bg.gif',
]

//学习币背景
const score = [
    './assets/d1/score.gif',
    './assets/d2/score.gif',
    './assets/d3/score.gif',
    './assets/d4/score.gif',
    './assets/d5/score.gif',
    './assets/d6/score.gif',
    './assets/d7/score.gif',
    './assets/d8/score.gif',
    './assets/d9/score.gif',
    './assets/d10/score.gif',
]

// 每一题的正确答案题号，no0代表A，no1代表B，no2代表C，no3代表D
// const keys = ['no0', 'no1', 'no1', 'no0']

// 具体建议
const suggestion = [
    '<b>1.主动融入学校环境。</b>不管学校是否是自己的理想选择，既来之则安之，喜欢自己的学校，更容易产生归属感。<br /><br /><b>2.主动交往。</b>放下自己的自恋，主动和他人建立关系，不怕被拒绝。<br /><br /><b>3.及时求助。</b>遇到问题及时向辅导员、老师、室友求助，不要躲在自己的世界里面，主动寻求外部帮助。<br /><br /><b>4.做好时间管理。</b>不要随意打乱自己的作息，按照自己熟悉的学习方法进行学习。不懂的地方，及时向老师和同学求助。<br /><br /><b>5.学会独立生活。</b>在心理上和父母“断乳”。',
    '当你发现自己不再是“佼佼者”时，内心难免会有些挫败和失落。别失去信心，以下是一些小建议：<br /><br /><b>1.接纳自己。</b>来到大学，你需要接纳自己不再是最优秀的那个人。这并不代表你就不再优秀，你仍然可以发挥自己的潜力，做出出色的成绩。<br /><br /><b>2.发挥优势。</b>每个人都有自己的价值和潜力。试着找出你自己的长处和兴趣。发挥优势不仅能让你更愉快，也能帮助你“逆风翻盘”。<br /><br /><b>3.合作共赢。</b>在大学里，你会遇到许多聪明、优秀的人，他们的出现可能会让你感到压力，但这并不意味着你必须放弃自己。相反，你可以看作是一个机会，去认识他们，与他们交流、合作，共同进步。通过与他人的合作，你可以在一个团队中互相支持，激发彼此的潜力。',
    '1.正确理解和接纳自己面临各种压力时的焦躁情绪。这些都是你在全力调动自己身心资源应对压力时的一种反应。<br /><br /><b>2.发掘和利用自己喜欢、适合和有效的方式。</b>比如正念、冥想、运动等，努力接纳这些负面情绪，想办法使自己平静下来。<br /><br /><b>3.借鉴时间管理的SMART原则（具体、可衡量、可达到、相关性、时间限定）。</b>根据任务对自己的重要性和紧急程度，将任务合理划分，做好时间管理，在重要而紧急的任务上适当多花时间。<br /><br /><b>4.适当降低期待。</b>由于临近考试，时间紧、任务重，所以要适当降低对自己的期待，不能要求自己在所有任务上都能取得预期成绩。<br /><br /><b>5.增进自我觉察。</b>将注意力放在任务上，而不是放在对结果的担心上。<br /><br /><b>6.按时吃饭、规律作息。</b>增强对自我的控制感。',
    '恋人提出分手只是现在你们的感情变化了，并不能否定之前你们在一起时快乐的时光。在恋爱中我们总会被那些和我们有相同点、互补性或是能满足我们某一需要的人所吸引，现在Ta被新的人所吸引并不表示你不够好，只是Ta有了新的需求被满足。失恋对大多数人来说是痛苦的，但这并不意味着你无法从中走出来。<br /><br /><b>1.接受现实。</b>尽管很难，但这是向前迈进的第一步。<br /><br /><b>2.做自己的事情。</b>继续进行你感兴趣的活动和爱好，做自己的事情，让自己保持忙碌。<br /><br /><b>3.寻找支持。</b>与朋友、家人或专业人士交流，寻求支持和建议。<br /><br /><b>4.避免过度使用社交媒体关注前任的生活。</b>这只会加剧负面情绪。<br /><br /><b>5.反思自己。</b>反思过去的恋爱关系，找到自己可以改善的地方，并努力成为更好的人。<br /><br /><b>6.保持积极态度。</b>相信未来会更美好，不要对自己失去信心。<br /><br /><b>7.寻找新的机会。</b>在适当的时候，寻找新的恋爱机会，开始新的恋爱生活。',
    '<b>1.可以全宿舍一起商量制定宿舍生活守则。据此合理规范每个人的行为。</b><br /><br /><b>2.通过改变自己的应对方式来避免针锋相对的矛盾。比如戴耳塞、把私人物品锁起来等。</b><br /><br /><b>3.单独邀约这位室友真诚友好地谈谈。</b>坦诚自己的问题，同时委婉指出对方的问题，明确告诉他自己的底线，希望彼此能够相互理解，各自适当做出一些改变，让寝室成员之间的关系不至于那么尴尬。<br /><br /><b>4.课余时间去图书馆或者自习室寻找自己的空间。</b>尽量减少与室友直接接触的矛盾。<br /><br />如果以上方法都无效，那么你<b>可以向班主任或辅导员来客观地反映这件事</b>，申请换寝室来避免跟他发生正面冲突。',
    '<b>1.做点别的有意思的事情。</b>想玩手机时可以闭目养神，缓解自己焦虑和烦躁的情绪，减少玩手机的想法。还可以外出散步、做运动、听音乐，纾解负面情绪，恢复精神，削弱玩手机的动机。<br /><br /><b>2.对手机进行“空间阻隔”。</b>关闭手机铃声和不必要的消息通知，将手机置于伸手不能触及的地方，减少手机相关因素的刺激。<br /><br /><b>3.把手机当作解决问题的工具。</b>每次在拿起手机的时候问自己三个问题：你为什么打开手机？你要看多长时间？你还能去做什么？要求自己上课、走路、睡前一小时不玩手机等以此来控制自己使用手机的时间。<br /><br /><b>4.采用“番茄工作法”完成自己的每日计划。</b>每集中学习25分钟后休息5分钟，完成4个番茄钟后给予自己15 - 30分钟长休息的时间，以此来锻炼自己的专注力。',
    '父母过度的爱会让孩子感到窒息，有些父母可能一直不能明白为什么自己呕心沥血的爱换来的却是孩子的反对、叛逆和不满。因为他们自己都没有意识到，他们的爱如枷锁一样在束缚着孩子。<br /><br /><b>1. 减少接触，</b>和父母约定好电话联系的频率和时长。<br /><br />2. 寒暑假等假期在学校努力提升自己的水平，<b>减少在家的时间</b>。<br /><br />3. 当与父母产生矛盾时，<b>减少内在的愧疚感</b>，自己是独立的个体而非父母的意志表现体。<br /><br />4. 用自己的方式来孝敬父母而不仅仅是孝顺父母，敬重父母而不仅仅是顺从父母。<br /><br />5. 寻求专业心理咨询师的建议。',
    '<b>1.接受心理咨询很正常。</b>当我们遇到困扰，一般会想办法自己应对，但有些问题可能自己无法解决，这就需要寻求他人的帮助了，而心理咨询是寻求帮助最有效的方式之一。现在越来越多的人对接受心理咨询持接纳的态度，且学校心理咨询都是公益性的，是在校大学生的一项专属“福利”。<br /><br /><b>2.人们在某些时候接受心理咨询更有利于自己的成长。</b>在学校前来预约咨询的同学绝大多数都是正常人，只是他们遇到了用自己过往经验无法解决的问题而需要他人的帮助而已。我们每个人都有可能会遇到的情绪、学业、人际、情感和生涯发展等方面的问题，心理咨询能帮助我们更好、更快地应对。<br /><br /><b>3.心理咨询不是普通的聊天。</b>心理咨询师都是掌握了相关的心理学知识并接受过一定时间专业训练的人。虽然大部分心理咨询是通过交谈方式进行，但是谈话的背后有心理学的原理、方法和技巧，和普通聊天、谈话不一样，具有专业性。',
    '<b>1.有的放矢。</b>确认目标企业的招聘条件，对于明确只招聘某些专业的企业可以果断放弃，聚焦在有机会的企业上。<br /><br /><b>2.稳住阵脚。</b>总结一下前期求职的经验教训，向已经成功入职的同学和行业内的学长请教，重建信心。<br /><br /><b>3.突出人设。</b>企业招聘的不是专业，而是人。因此，主动打造自己的职场人设，突出自己职业能力的闪光点和潜力，通过简历等形式展示出来打动企业，是求职要做的第一件事。<br /><br /><b>4.知己知彼。</b>如果有心仪的企业，求职前充分地了解对方企业的文化理念、未来的发展方向等，在求职中适当地展示出你对对方企业的了解，将给你的求职加分不少。<br /><br /><b>5.迂回包抄。</b>可以考虑心仪公司的相关岗位，也可以考虑同一行业里的其他相似公司，先入行，再择业。',
    '“人无千日好，花无百日红。”偶尔因这样或那样的原因，导致情绪不好、懒得理人也是很常见的，如持续时间不长，可以躺平一段时间，因为你也是平凡人，不用感到羞愧或不安。但是如果这种感觉持续了半个月甚至更长时间，要稍微觉察一下，觉察的要点：<br /><br />1.这种感觉是不是以前没有而现在特别明显且无力改变？<br />2.有没有出现失眠、头痛等躯体不适且无力改变？<br /><br />如果答案都是肯定的，那要及时寻求一些外部帮助，这时候，讲出来很重要。如果你找不到合适的人帮助，也可以这样试试：<br /><br /><b>1.100 % 的梳理！</b><br />把当下让你感到迷茫的事全部写出来，然后分类排序，看看哪些是完全无法改变的，哪些是通过努力曾经成功应对的，哪些是不确定的。梳理的过程也是条理化的过程，清晰多了，迷茫就少了。<br /><br /><b>2.1 % 的改变！</b ><br />完成1个动作，比想明白100个道理更有用。从现在开始，做出一点点改变，比如“把坐着发呆”改成“站着发呆”，不想和人说话可以自言自语。沉浸在迷茫中只会更自责，哪怕1 % 的改变也会帮你找到暂时的平静。',
]