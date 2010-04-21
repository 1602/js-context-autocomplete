/*global $, test, equal, ok, same*/
var categories = ['Питание', 'Бытовые расходы', 'Машина', 'Здоровье', 'Счета'],
	notes = ['Обед', 'Проезд', 'Бензин', 'Овощи', 'Окорочка', 'Овощерезка', 
	'Обои', 'Обувные аксессуары', 'Обувь'],
	habra_tags = ['.net', '.net 4.0', '.net compact framework 2.0', '.net compact framework 3.5', '.net framework 4.0', '01', '100', '120dpi', '15 минут', '16 rules', '1834 год', '19 век', '1984', '1990', '1c', '1u', '2.0', '2001г', '2008', '2d boy', '2х2', '2x2', '30 сентября', '3d', '3d realms', '3d-тв', '3dmax', '3g', '404', '404 error', '404 page', '404fest', 'aa', 'acer', 'acer  aspire  one', 'acronis', 'actionscript', 'actionscript 3', 'actionscript 3.0', 'add-on', 'add-ons', 'addon', 'addons', 'adobe', 'adobe flash', 'adroid market', 'adsense', 'advanced', 'adwords', 'afilias', 'agile', 'ai_boy', 'ajax', 'ajax.net', 'alcoa', 'alex schulz', 'alpha', 'alpha-релиз', 'altavista', 'amazon', 'amd', 'american show', 'amiga os', 'amp;a', 'android', 'android market', 'android sdk', 'android source code', 'antispam', 'aphex twin', 'aport', 'app store', 'apple', 'apple special event', 'application support', 'appstore', 'architect', 'array', 'as', 'asd', 'asf', 'asp', 'asp.net', 'assassin creed', 'asus', 'asustek', 'ati', 'ati radeon hd 4350', 'atom', 'augmented reality', 'axure', 'axure pro', 'azure', 'baml', 'barcode', 'bash', 'bcn', 'beos', 'beta', 'bethesda softwork', 'beyond space and time', 'bigstreet', 'billing', 'binding', 'biomimetic car robot drive', 'bitrix', 'bittorrent', 'blackbox.ru', 'blizzard', 'blog.ru', 'blogcampcee2008', 'blogger', 'blogger.com', 'bluegriffon', 'bluetooth', 'bluetooth manager.', 'bob parsons', 'bold', 'bonds', 'book', 'bookmarks', 'boom', 'boomburum', 'bootsect', 'bouml', 'br23c', 'branch', 'buddycast', 'bug', 'business', 'c', 'c sharp', 'calendar', 'calo', 'canon', 'casual', 'cat', 'ccылки', 'cheatsheet', 'china channel', 'chrome', 'cisco', 'ciscoblog', 'cldc', 'cli', 'cloud computing', 'cms', 'co-pie', 'codeigniter', 'codeweaver', 'color', 'color lines', 'color picker', 'colorpicker', 'comet', 'comindwork', 'command and conquer', 'commentsfx', 'community', 'competition', 'compiling', 'components', 'connor', 'contenteditable', 'context menu', 'corel', 'corot', 'cpu usage', 'crossover', 'cs4', 'css', 'css expressions', 'css sprites', 'ctrl alt del', 'cyberdyne', 'cвоими руками', 'dark mi', 'darpa', 'darudar', 'data-smerti.ru', 'data:url', 'dd', 'deadline', 'debug', 'deep zoom', 'defa gruppe', 'default chrome', 'deflate', 'delicious', 'dell', 'deploy', 'design', 'design-freak.com', 'designmode', 'development', 'digitalsky', 'discover', 'distributed password recovery', 'django', 'dmc-g1', 'dna', 'doctrine', 'documentation', 'documents and settings', 'dog-pile', 'dojo', 'dojo javascript toolkit', 'downloads', 'downloand', 'dreamweaver', 'droid', 'duke nukem forever', 'dump.ru', 'dxg', 'e-ink', 'e-mail', 'e-reader', 'ea', 'ebay', 'ebook', 'education', 'eee  pc', 'eee pc', 'eee pc 1000h', 'eee storage', 'eeepc', 'effect', 'electric plane launcher kit', 'em', 'embedded', 'eno setiawan', 'epd', 'equities', 'erd', 'erwin', 'etc', 'everything', 'exchange 2007', 'express', 'fake', 'falcon9', 'fallout', 'fallout 3', 'federico fieni', 'fedora', 'feedburner', 'fennec', 'ff3.1', 'final', 'finance', 'finepix real3', 'firebug', 'firefox', 'firefox 3', 'firefox mobile', 'firephp', 'fireshot', 'first note', 'fla', 'flash', 'flash player', 'flash player 10', 'flash player 9', 'flatshare', 'flex', 'flex 3', 'flex builder', 'flickr', 'flv', 'font size', 'fonts', 'forbes', 'framework', 'free', 'freebsd', 'freelance', 'freeradius', 'freestyle audio soundwave', 'fujifilm', 'g1', 'gamedev', 'games', 'gchq', 'gdd', 'gears geolocation api', 'gecko', 'geforce 9400m', 'general electric', 'geoeye-1', 'geoeye-2', 'geospatial-intelligence agency', 'geotate', 'getcodec', 'getting real', 'gfs', 'ghc', 'gil', 'git', 'github', 'glider', 'gliffy.com', 'global immersion', 'glossy', 'gmail', 'gnome', 'godaddy.com', 'gogo', 'google', 'google analytics', 'google calendar', 'google calendar sync', 'google chrome', 'google developer day', 'google docs', 'google labs', 'google maps', 'google translate', 'google календарь', 'googledocs', 'gphone', 'gprs', 'graphics', 'greylisting', 'gsm', 'gta', 'gtalk', 'gtk', 'gzip', 'habradigest', 'habrafx', 'habragoogle', 'hadoop', 'hal', 'half-life', 'hamadoun tour', 'handmade', 'hanger', 'haruo suekichi', 'hashtrain.com', 'hd-видео', 'hdapm', 'hdd', 'hdfs', 'hdparm', 'hicks', 'hints', 'hippus handshoemouse', 'holy code', 'hosted apps', 'htaccess', 'htb', 'htc', 'htc touch', 'html', 'hybrid assistive limb', 'hyper-v server', 'i am russian', 'ibex', 'ibm', 'icons', 'icq', 'idea', 'ideablog', 'idn', 'ie', 'ie6', 'ie7', 'ie8', 'ies4linux', 'iframe', 'igoogle', 'illustrator', 'im', 'image resize', 'imagemagick', 'imagick', 'imap', 'imax', 'inamo', 'indesign', 'inferno', 'info', 'innovation', 'innovators grant', 'install', 'intellij idea', 'intercepter', 'interitive', 'internet', 'internet explorer', 'interplay', 'interstellar boundary explorer', 'intrepid ibex', 'invention', 'iomega', 'iorgane', 'ios', 'iphone', 'iphone 3g', 'ipo', 'ipod', 'ipod touch', 'iq', 'irda', 'iriver', 'isis', 'it', 'italic', 'itu', 'itunes', 'iui', 'ivr-биллинг.', 'j2me', 'j2me 3.0 sdk', 'jabber', 'java', 'java me', 'java user group', 'javafx', 'javascript', 'jodcast', 'joke', 'joomla', 'jquery', 'jquery colorpicker', 'jquery timers', 'js', 'jsr 226', 'juick', 'jumpidea', 'just for free', 'jwt',
		'kde', 'keeper', 'ketama', 'keyboard vacuum cleaner', 'keynote', 'kindle 2', 'laptop', 'life', 'limbo', 'limesurvey', 'lines', 'linus torvalds', 'linux', 'live search', 'live show', 'liveinternet', 'livejournal', 'livestreet', 'logo', 'long-polling', 'lp saver', 'ltsp', 'luis luna', 'lumix', 'lvm', 'lxde', 'm', 'mac', 'mac funamizu', 'mac os', 'mac os x', 'mac os x leopard', 'mac vs pc', 'macbook', 'mail goggles', 'mail.ru', 'mama', 'mandriva', 'mandriva 2009', 'manual', 'markets', 'masterhost', 'maven', 'max payne', 'mcdonalds', 'mdc', 'mdy industries', 'media player', 'mediawiki', 'medved weekly podcast', 'megafon', 'memcached', 'memcachedb', 'micro four thirds', 'microsoft', 'midlet', 'midlets', 'midp', 'military sealift command', 'mindfuck', 'miranda', 'miranda im', 'mmo', 'mmoglider', 'mmorpg', 'mobile', 'mobile development', 'moblin', 'mod design', 'mod_expires', 'mod_headers', 'money', 'mootools', 'morrison planetarium', 'motorola', 'mozilla', 'mozilla firefox', 'mp bill', 'mp3', 'mp3-плеер', 'mri', 'ms visio', 'msbuy', 'msdn', 'msn', 'multitouch', 'museum', 'mvc', 'mvc framework', 'mysql', 'mysql workbench', 'n810', 'namespace', 'national geographic', 'net', 'netbeans', 'netbks', 'netbook', 'netbynet', 'netcat', 'netstream', 'next', 'nginx', 'nginx patch', 'nigma', 'nintendo', 'nintendo ds', 'nissan', 'nokia', 'nokia 5800', 'nsf', 'nvidia', 'nvidia legacy', 'юбилей', 'юзабилити', 'юзабилити тестирование', 'юзабилити бюллетень', 'юмор', 'юмор на хабре', 'с понтом pod зонтом', 'сюда', 'ссср', 'ссылка', 'ссылки', 'суслики', 'суд', 'супергерои', 'статистика', 'статистика яндекса', 'стартап', 'стартапы', 'старость', 'стандартизация', 'стив возняк', 'стив джобс', 'стикеры', 'стимпанк', 'стоимость linux', 'стоимость трафика', 'стеб', 'счастье', 'счетчик', 'сo-working', 'сsharp', 'сайт', 'сайты школ', 'сайтостроение', 'самые длинные теги на хабре', 'самые популярные запросы', 'самара', 'саморазвитие', 'самомотивация', 'связь', 'светопоглощение', 'сжатие', 'синхронизация данных', 'скриншот', 'скриншоты', 'скринкаст', 'скан', 'скандал', 'скин', 'скорость', 'скорость загрузки', 'слух', 'слежка', 'слежка за гражданами', 'слежение', 'слежение за пользователями', 'слепым', 'смарти', 'смарти 3', 'сми', 'сниффер', 'снимки', 'софт', 'соцсети', 'социальный', 'социальные сети',
		'социальные сервисы', 'социальные закладки', 'социальная сеть', 'сорм', 'совместимость',
		'советы', 'совершенствование', 'создание сайтов', 'солнечный ураган', 'солнечный ветер',
		'солнечная система', 'сообщества', 'сообщество', 'соеднияем две сети', 'спутниковая съемка',
		'спам', 'спамеры', 'сплоит', 'сеть', 'сети', 'сетевое хранилище', 'сервис', 'сервисы', 'сервер',
		'серверная валидация', 'сергей белоусов', 'семья', 'семинар', 'эффективность', 'эргономика',
		'эвелин лохбэк', 'эзотерические языки', 'экстремизм', 'эксперимент', 'экран', 'экранизация',
		'экзоскелет', 'экосистема', 'экология', 'экономика', 'электронный документообор', 'электронные книги', 'электронная бумага', 'эмоции', 'энтропия', 'я работаю в microsoft', 'я пиарюсь', 'я.ру', 'ядро linux', 'яков сироткин', 'яндекс', 'яндекс.фотки', 'установка', 'ускорение', 'условия', 'успех', 'утилиты', 'утиная типизация', 'ущерб', 'уравнения', 'угроза', 'удаление', 'удобство', 'украинская раскладка', 'универсальная валюта интер', 'управление', 'управление проектами', 'управление персоналом', 'штрих-коды', 'шрифт', 'шрифты', 'шредер', 'шарики', 'школьный портал', 'школа', 'шоу', 'шпаргалка', 'шедевр', 'тюнинг', 'тэг!', 'тэги', 'туториал', 'турция', 'трафик', 'трилогия', 'троли', 'трейлер', 'треки', 'тач-скрин', 'тачскрин', 'тачпад', 'тачпанель', 'табы', 'таблицы преобразований',
		'тайм-менеджмент', 'тв', 'творчество', 'тихий компьютер', 'тим кейн', 'типограф',
		'типографские раскладки', 'типографика', 'точки', 'торрент', 'торрент-клиент', 'тормоза',
		'тонкий клиент', 'топливо', 'тест', 'тесты', 'тестирование', 'технологии', 'теги',
		'текст в картинку', 'телескоп', 'телефон', 'телереклама', 'телевидение', 'телеканал россия',
		'телекоммуникации', 'телепередачи', 'тень', 'тени ангмара', 'теория алгоритмов',
		'теоретическая информатика', 'фунт', 'функции', 'фриланс', 'френды', 'фас', 'файлы',
		'фан', 'фанатизм-идиотизм', 'физика', 'фильмы', 'финансы', 'финансирование', 'флаги',
		'флешка', 'фотохостинг', 'фотоальбом windows live', 'фотографии', 'фотоконтекст', 'формы',
		'фонарики', 'фондовый рынок', 'фппп', 'фейк', 'фейк-эффекты', 'цыган', 'цветы', 'цитаты', 'цитата', 'циклы', 'цели', 'целеполагание', 'цена', 'цензура', 'цензура в интернете', 'чулпан', 'что-то еще', 'чтовсемыздесьсегоднясобра', 'частицы', 'часы', 'чашка', 'чистая энергия', 'числа', 'число зверя', 'читалка', 'чичваркин', 'честность', 'чехол', 'червь', 'черный кремний', 'черновики', 'человечество', 'человекоподобные роботы', 'хюсяля', 'хрень', 'хабр', 'хабрасила', 'хабрахабр', 'хабракат', 'хак', 'халява', 'хаос', 'хорошее дело', 'хобби', 'холодильник', 'холодильник тэгов', 'щачло', 'рэй', 'русская морфология', 'русский биллинг', 'рубёрнер', 'руль', 'рунет', 'рынок', 'рroject o', 'расширения', 'растения', 'распределённая система', 'рабы', 'работа', 'работа с заказчиком', 'рабочий стол', 'разработка', 'развод', 'раздумья', 'размышления', 'ракета-носитель', 'рамблер', 'рапорт об увольнении', 'россия', 'российская неделя интернет', 'российские роботы', 'роботы', 'роботизированный костюм', 'родственники', 'розница', 'ресторан', 'решение', 'ретро', 'ревуле', 'регулятор', 'регион', 'редирект', 'режимы конфигурации', 'результат', 'результаты', 'реклама', 'рекламная кампания', 'рекомендации', 'религиозные войны', 'релиз', 'ренова-телеком', 'ренова-медиа', 'реостат', 'obama', 'objective-c', 'odf', 'office', 'office labs', 'office web', 'oled', 'online-консультирование', 'oo', 'oo draw', 'oop', 'ooxml', 'open handset alliance', 'open office', 'open source', 'opencase', 'opengl', 'openid', 'openoffice', 'opensource', 'openssh', 'openvpn', 'opera', 'os', 'oslo', 'overclocking', 'packet tracer', 'page', 'paper', 'paper craft', 'papervision', 'parallel programming', 'parallels', 'patch', 'paul graham', 'pc', 'pc magazine', 'pc world', 'pc world belarus', 'pdc', 'percent', 'perl', 'personal genome project', 'photoshop', 'photoshop cs4', 'photoshop express', 'php', 'phpbb', 'piet', 'pixar', 'pizzahut', 'planet3', 'plantbot', 'plugin', 'popup', 'powerdesigner', 'powerpoint', 'powerset', 'pptp', 'practices', 'premier', 'president', 'prize', 'programming', 'proposal', 'proxy', 'psp2', 'pt', 'putty', 'px', 'pydev', 'python', 'qgreylistrbl', 'qmail', 'qnx', 'qos', 'qr-code', 'quake', 'quick start', 'quot;', 'quot;первичное размещение', 'qwe', 'radeon hd 4550', 'rails', 'rails railsruble games', 'raising the bar', 'rambler', 'rambler media', 'rambler планета', 'raphael', 'rbl', 'rblsmtpd', 'reader', 'red alert 3', 'red dot', 'reflector', 'reiserfs', 'release', 'research', 'rhino', 'ria', 'riw', 'riw-2008', 'rss', 'rss-фиды', 'rss.com', 'rst', 'rubitone', 'ruburner', 'ruby', 'safari', 'sality', 'samsung', 'samsung electronics', 'sandisk', 'sape', 'schwinn tailwind', 'scib', 'science', 'screencast', 'sdl', 'search', 'sebastian bergne', 'security', 'sequoia studio', 'shares', 'shindig', 'sidesight', 'sifr', 'silverlight', 'sim', 'simpals', 'sionyx', 'siri', 'sis-tema', 'skype', 'skype 4.0', 'skysails', 'smarty', 'smarty3', 'smile', 'sms', 'sms платежи', 'sms-биллинг', 'sms-платежи', 'smushit', 'sniffer', 'snv', 'socialwatch', 'socket', 'socks', 'songsterr', 'sony', 'south park', 'sp2', 'spacex', 'spam', 'speri', 'spinn pmp', 'split', 'sql', 'sql injection', 'sqlite', 'ssh', 'sss', 'standalone', 'starcraft 2', 'start-up', 'startup meeting', 'startups', 'steam', 'stefan buchberger', 'stereokiller.ru', 'stmusic.org', 'stock exchange', 'stocks', 'storcenter ix2', 'studio psyho', 'stylesheets', 'subeclipse', 'sun', 'super charge ion battery', 'surface', 'svg', 'symfony', 'synaptics', 'sync', 'syntax highlight', 't-mobile', 'tag', 'tagnetic', 'tc', 'teach the people', 'Test', 'textarea', 'the spotlight turns to notebooks', 'thomas o', 'thread', 'threading', 'thumbs', 'thunderbird', 'thunderbird 2.0', 'time machine', 'time management', 'timers', 'tiny', 'tips', 'tips and tricks', 'tokipona', 'tom online', 'tom-skype', 'tooltips', 'top4top', 'toshiba', 'touch', 'touchscreen', 'trends', 'tribler', 'tsmc', 'tuttuki bako', 'typograf', 'typographus', 'typography', 'ubuntu', 'ubuntu 8.10', 'ubuntu-server', 'ui', 'uiacceleration', 'uiaccelerometer', 'uidevice', 'uitableview', 'ulog-acctd', 'uml', 'underline', 'unidym', 'uniview', 'us navy', 'usa', 'usb  petousb', 'usb модем', 'usb-микроскоп', 'usb-приколы', 'usb_prep', 'usemap', 'user experience', 'usercontent',
		'ussr', 'valve', 'vcs', 'velcom', 'versus', 'vista', 'visual studio', 'visual studio 2005', 'visual studio 2008', 'visual studio 2010', 'vladivostok', 'vml', 'vp communities', 'vpn', 'vray', 'vselisdelal', 'vudu', 'web', 'web 2.0', 'web editor', 'web forms', 'web разработка', 'web-development', 'web2.0', 'web2people', 'web3.0', 'webmoney', 'wget', 'widgets', 'wifi', 'wimax', 'window.onload', 'windows', 'windows  xp', 'windows 7', 'windows ce', 'windows live', 'windows live photo gallery', 'windows mobile', 'windows server 2008', 'windows vista', 'wireless toolkit', 'wma', 'wordpress', 'world of goo', 'world of warcraft', 'wow', 'wowglider', 'wpa', 'wpf', 'wtf', 'wysiwyg', 'x library', 'xaml', 'xbox360', 'xhtml', 'xkcd', 'xml', 'xorg', 'xslt', 'xspf', 'yahoo', 'yahoo mail', 'yahoo open strategy', 'yandex', 'yos', 'yota', 'youtube', 'yuicompressor', 'zend', 'zend framework', 'zoom', 'zsh', 'zyb', 'а вдруг и на лепре выберут', 'ассемблер', 'астросейсмология', 'аскольд пьявченко', 'аэродинамика', 'аукцион доменов', 'атака клонов', 'атомарность', 'артур шмидт', 'артемий лебедев', 'архитектура', 'архивы', 'археи', 'абу-даби', 'авто', 'авторское право', 'авторизация', 'автомобили', 'авиация', 'ад', 'аксон', 'акселерометр', 'акунин', 'актуальность', 'активность солнца', 'активность нейронов', 'акции', 'акадо', 'аккумулятор', 'акелла', 'александр герасимов', 'александр жаров', 'америка', 'американско-китайский', 'антарктида', 'антиспам', 'антивирусы', 'анализ', 'анализ трафика', 'анализ днк', 'английский язык', 'андроид', 'андроидные роботы', 'анимация', 'анна качкаева', 'анонсы', 'апгрейд', 'бюллетень', 'будущее', 'букмарклеты', 'бумага', 'браузеры', 'браузерные приложения', 'брайан гаррет шур', 'батарейки', 'барселона', 'баг', 'базы данных', 'база данных', 'базовая станция', 'бактерия', 'бальзак', 'банки', 'битые ссылки', 'биржа', 'библиография', 'бизнес', 'бизнес-модели', 'бизнес-процессы', 'билайн', 'билл гейтс', 'биллинг', 'билеты', 'биография', 'благодать', 'блог', 'блоги', 'блогосфера', 'блок питания', 'блокировка', 'боярский язык', 'боян', 'бозон хиггса', 'бонус', 'бонды', 'боекомплект разработчика', 'бесшумный компьютер', 'беспроводные сети', 'бесплатные ссылки', 'бесплатно', 'бесплатное по', 'бета', 'бегун', 'беги', 'без винта', 'безлимит', 'безопасность', 'безопасность по', 'белые рыцари хабра', 'беларусь',
		'белорусская раскладка', 'бензин', 'в контакте', 'встречи', 'встречи стартаперов', 'все не так плохо', 'вселисделал', 'выставка', 'выставки', 'выхлоп', 'выхлопы', 'выгодно', 'выживание', 'вымпелком', 'время', 'временные формы', 'василий гатов', 'валидация', 'вгтрк', 'взаимопонимание', 'вирусы', 'виртуалы', 'видео', 'видеохостинг', 'видеоблог', 'видеокарта', 'видеокамера', 'визуальный редактор', 'вилка', 'винил', 'вконтакте', 'вконтакте.ру', 'властелин колец онлайн', 'владеющие', 'влияние пользователей на и', 'внимание пользователей', 'внешние ссылки', 'внедрение', 'воровство контента', 'водород', 'водонепроницаемый', 'воздушный змей', 'верстка', 'веб мессенджер', 'веб-разработка', 'веб-дизайн', 'веб-камера', 'веб-приложение', 'веб-программирование', 'вебмастер', 'ведомости', 'век учись', 'век живи', 'великие саундтреки', 'венчурные инвесторы', 'графический блог', 'графика', 'грамматика', 'грамотность', 'грандиозные постройки', 'гарфилд', 'гаджет', 'гаджеты', 'газпром', 'гамовер', 'гитара', 'гигиена', 'глюки', 'глухота', 'глупости', 'главный по жж', 'государство', 'государственные учережден', 'горшок', 'говняшка', 'голосовая связь', 'головоломки', 'голография', 'гонки', 'геймеры', 'гелиосфера', 'генотип', 'геном', 'дурдом', 'дубаи', 'думай сам', 'дата смерти', 'датамайнинг', 'дар', 'давыдов', 'дайджест', 'дважды два', 'джобс', 'джек томпсон', 'диск', 'дискета', 'дизайн', 'длина одного тега не может', 'дмитрий медведев', 'дмитрий медников', 'днк', 'договор', 'документация',
		'доклад', 'долги', 'доллар', 'домен', 'домены', 'доменные имена', 'доменная зона', 'допинг для мозга', 'десятипальцевым', 'дети', 'детектор', 'децентрализованная систем', 'дерево', 'дебаг', 'девайсы', 'декада', 'демьян кудрявцев', 'демарко', 'демонстрация работы дизайн', 'день интернета', 'день программиста', 'деньги', 'журнал', 'журналы', 'жж', 'живой журнал', 'жизнь', 'железо',
		'зачистка', 'заработок в сети', 'загрузка', 'задачи', 'задачки', 'задолбали своим iphone', 'закачка', 'заказчик', 'закладурки', 'закон', 'законы развития систем', 'законодательств', 'законодательство', 'замена слов', 'запросы', 'запреты', 'запретный город', 'записки', 'заебали со своим лебедевым', 'здесь и сейчас', 'зимняя школа', 'зонт', 'зеленый коровник', 'зеленые технологии', 'и на лепре выбрали', 'исследования', 'исследование', 'истина', 'история успеха', 'исходники', 'искусственный интеллект', 'иван медведев', 'игрушки', 'игры', 'идея', 'идеал', 'идеи', 'идеи сайта', 'извинения', 'изображения', 'ии', 'иконизация', 'иконка', 'иконки', 'инструкция по установке', 'интранет', 'интервью', 'интернет', 'интернет-реклама',
		'интернет-буржуй', 'интернет-бизнес', 'интернет-магазин', 'интернет-магазины',
		'интересная', 'интеллект', 'информационные технологии', 'информационная безопаснос', 'инфоком', 'инфоком-2008', 'инвайты', 'инвестиции', 'индустрия', 'индийский код', 'инженерные практики', 'инновации', 'ипотека', 'кэш', 'кэширование', 'курс доллара', 'курсы валют', 'кубик рубика', 'кубок яндекса', 'культура ссылок', 'крым', 'краткий обзор', 'кризис', 'кризис 2008', 'крок', 'крокус экспо', 'креатив', 'касперский', 'качество по',
		'карьера', 'карма', 'кармаграф', 'карманы', 'казазстан', 'какздорово', 'календарь', 'камасутра', 'камера', 'квантовая криптография', 'китай', 'кирпичи', 'кидалово', 'кино', 'кинополе', 'кинематограф', 'ключ', 'ключевые слова', 'классы сложности', 'кластеризация', 'клиентская оптимизация', 'клетка', 'книга', 'книга рекордов гиннеса', 'книги', 'кнопки', 'космос', 'котировки', 'кофе', 'корректура', 'коротаем время', 'короткометражные фильмы', 'коронарный выброс', 'корпус', 'корпоративные подписки', 'кодекс', 'кольцо', 'коллаборативность', 'коллайдер', 'коллективный разум', 'коллективное интервью', 'коллекционное издание', 'комикс', 'комиксы', 'коммуникации', 'коммерция', 'комментарии', 'комментарий', 'компьютеры', 'компания и публика', 'компании', 'конструктор', 'консоли', 'контакты', 'контекстная реклама', 'конференция', 'конференции', 'концепт', 'концепты', 'концепция', 'конвергенция в сми', 'конкурс', 'конкурс стартапов', 'конец эпохи', 'копирайт', 'кеш', 'кеширование', 'кенни', 'люди', 'латвия', 'лайтман', 'литий-ионные аккумуляторы', 'лицензия', 'лицензии', 'лицензионный контент', 'личный топ', 'личные сообщения', 'личность', 'ликбез', 'линус торвальдс', 'лохотрон', 'логин', 'ложка', 'лола', 'лондон', 'лекция', 'лень', 'лента', 'мясо', 'мудрость толпы', 'музыка', 'мультфильм', 'мультитач', 'мультимедиа-плеер', 'мульфильм', 'мысли', 'мышь', 'масштабирование', 'мастер', 'масляное охлаждение', 'маятник ньютона', 'математика', 'маршалловы острова', 'марат гуриев', 'маразм', 'маркетинг', 'магнит', 'магнитола', 'майкл доннели', 'макдональдс', 'макось', 'миша квакин', 'микро 4:3', 'микроблоггинг', 'милиция', 'минсвязи', 'минимализм', 'миелин', 'ммвб', 'много спама', 'много букв', 'многоязычность', 'москва', 'москва.ру', 'мошенники', 'мотивация', 'морфология', 'мобильный интернет', 'мобильный поиск', 'мобильные телефоны', 'мобильные платежи', 'модуль', 'моддинг', 'модерация сообществ', 'модем', 'мозг', 'моиродные', 'монитор', 'монетизация', 'монетизация проекта', 'метафора', 'метки', 'методом', 'мебель', 'мебель будущего', 'мегафон', 'медвед подкаст', 'медведев', 'медиахолдинг', 'медийное пространство', 'межзвездный газ', 'менеджмент', 'менеджер логических томов', 'на золото', 'нас не сломаешь', 'настройка', 'наставники', 'настоящее', 'наука', 'национальные домены', 'народное голосование', 'навигация', 'надоело', 'накрутка', 'накопитель', 'нанотрубки', 'написали', 'нигма', 'никола тесла', 'нло', 'ностальгия', 'ноутбук', 'нобелевская премия', 'новыя идеи', 'новый блог', 'новинки', 'новости', 'нож', 'не мешайте мне работать', 'неюмор', 'нетбук', 'недобросовестная конкурен', 'неизученное', 'нейрон', 'осцилляции', 'ошибка 404', 'от винта', 'ответственность', 'открытки', 'отказ', 'офис', 'оцифовано', 'очень', 'органайзер', 'органические светодиоды', 'организация работы', 'организм', 'оригами', 'объявление', 'обсуждение', 'обсуждение тз', 'обучение', 'общение', 'образование', 'образование 2.0', 'образование web', 'облигации', 'обман', 'обмен', 'обновление', 'оборудование', 'обои', 'огнелис', 'одна кнопка', 'одновременное', 'одноклассники.km.ru', 'одноклассники.ру', 'одноклассники.ru', 'однокласники', 'онлайн-экскурсия', 'онлайн-игра', 'онлайн-коммуникация', 'онлайн-консультирование', 'оноре де бальзак', 'ооа', 'ооп', 'оптимизация', 'оптимизация сайта', 'определение координат', 'пятидесятники', 'пятна на солнце', 'пьяные письма', 'пульт дистанционного управ', 'пылесос', 'притча', 'притчи', 'призы', 'принцип неопределённости', 'приобретение', 'простые пароли', 'простое число мерсенна', 'прослушка', 'прославленный годиссар', 'просмотр', 'прошу помощи', 'протоколы', 'профит всем', 'профиль', 'профиль пользователя', 'пробки', 'проблемы тысячелетия', 'проверенная музыка', 'программы', 'программы windows', 'программирование', 'программное обеспечение', 'прогнозы', 'продажи', 'производительность', 'прокси', 'проект', 'проектирование', 'проектирование взаимодейс', 'претезтация', 'превышать 35 символов', 'предотвращение столкновен', 'президент', 'премия рунета', 'паттерны', 'патент', 'параглайдер', 'пво', 'пзс', 'пи', 'письмо президенту', 'пиратство', 'плюш', 'платежная система', 'плагин', 'планировщик', 'планирование', 'планета школ', 'планетарий', 'плеер', 'постраничная навигация', 'потратим', 'почта россии', 'порно', 'порно-режим', 'победа', 'погода', 'поддержка сайтов', 'поддержка любимых сайтов', 'подзарядка', 'подкаст', 'позиционирование', 'поиск', 'поиск в интернете', 'поиск изображений', 'поиск картинок', 'поиск по habrahabr', 'поисковые запросы', 'покупка', 'пол бетлем', 'пользовательские интерфей', 'полнотекстовые фиды', 'половые различия', 'полезные советы', 'полезно', 'полезность материалов сайт', 'помощь', 'попячся', 'попытки', 'персональный помощник', 'первые шаги', 'перестроение', 'перехват паролей', 'переход', 'переворачиватель пингвинов', 'переводчик', 'переводы', 'е-штаб', 'евро', 'евросеть', 'еда', 'еженедельный'
	].sort(),
	places = ['Work', 'Home', 'Kazan', 'Default City', 'Default City 2'].sort();

$(function () {
	$('body')
	.append('<input type="text" id="simple_autocomplete" />')
	.append('<input type="text" id="mix_input" />');

	function get_autocomplete_menu(id, options) {
		return $('#' + id).autocomplete(options)[0].context_autocomplete;
	}

	test('simple menu', function () {
		var simple = get_autocomplete_menu('simple_autocomplete', notes);
		equal(typeof simple, 'object', 'Simple menu successfully created');

		simple.input.value = 'о';
		simple.handle_literal_char();
		simple.handle_special_char(40); // down
		simple.handle_special_char(40); // down
		simple.handle_special_char(13); // return
		equal(simple.input.value, 'Окорочка',
			'Down hotkey works fine');

		simple.input.value = 'о';
		simple.handle_literal_char();
		simple.handle_special_char(35); // end
		simple.handle_special_char(13); // return
		equal(simple.input.value, 'Обувь',
			'End hotkey works fine');

		simple.input.value = 'о';
		simple.handle_literal_char();
		simple.handle_special_char(35); // end
		simple.handle_special_char(36); // home
		simple.$menu.click();
		equal(simple.input.value, 'Обед',
			'Home hotkey and click works fine');
	});

	test('complex menu', function () {
		var complex = get_autocomplete_menu('mix_input', {
			'?': {
				regex: /^\d+[.,]?\d*\s+(.*)$/,
				items: categories,
				suffix: ': '
			},
			'^\\d+\\s+.*?: (.+)$': notes,
			'#': habra_tags,
			'@': places,
			'!': [1, 2, 3]
		});
		equal(typeof complex, 'object',
			'Copmlex menu successfully created');

		complex.input.value = '!';
		complex.handle_literal_char();
		ok(complex.$menu.is(':visible'),
			'Menu should be displayed after typeing ! sign');
		var first_menu_position = {l: complex.$menu[0].offsetLeft, t: complex.$menu[0].offsetTop};

		complex.handle_special_char(40); // down
		complex.handle_special_char(13); // return
		equal(complex.input.value, '!2',
			'Priority item successfully applied');

		complex.input.value += ' @';
		complex.handle_literal_char();
		ok(complex.$menu.is(':visible'),
			'Menu should be displayed after typeing @ sign');

		var second_menu_position = {l: complex.$menu[0].offsetLeft, t: complex.$menu[0].offsetTop};
		same(first_menu_position.t, second_menu_position.t,
			'Top positions of menus should be the same');
		ok(first_menu_position.l < second_menu_position.l,
			'Second menu left offset should be higher then first menu left offset');

		complex.handle_special_char(40); // down
		complex.handle_special_char(13); // return
		equal(complex.input.value, '!2 @Default City 2',
			'Second menu applying works');

		complex.input.value = '100 ';
		complex.handle_literal_char();
		ok(complex.$menu.is(':visible'),
			'Regex-related menu should be displayed (initiated with object)');

		complex.handle_special_char(13); // return
		equal(complex.input.value, '100 Питание: ',
			'Menu initiated with object applied');

		complex.input.value += 'Б';
		complex.handle_literal_char();
		equal(complex.$menu.find('li').size(), 1,
			'Filter works fine');

		complex.$menu.click();
		equal(complex.input.value, '100 Питание: Бензин',
			'Menu initiated with array applied; clicking on menu also works fine');
	});

	test('fix_ie_selection()', function () {
		var simple = get_autocomplete_menu('simple_autocomplete', notes);
		var r = simple.fix_ie_selection();
		if (!$.browser.msie) {
			ok(!r, 'Returns false when not in msie');
		} else {
		 	ok(r, 'Returns true when in msie');
			ok(typeof simple.input.selectionStart === 'number', 'selectionStart present');
			ok(typeof simple.input.selectionEnd === 'number', 'selectionEnd present');
		}
	});
});

