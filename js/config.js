// js/config.js

// Data Kalender Jawa Dasar
const NAMA_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const NAMA_PASARAN = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];

// Neptu Hari (Dino)
const NEPTU_HARI = {
    "Minggu": 5,
    "Senin": 4,
    "Selasa": 3,
    "Rabu": 7,
    "Kamis": 8,
    "Jumat": 6,
    "Sabtu": 9
};

// Neptu Pasaran
const NEPTU_PASARAN = {
    "Legi": 5,
    "Pahing": 9,
    "Pon": 7,
    "Wage": 4,
    "Kliwon": 8
};

// Interpretasi Hasil Pembagian (Lebih Mendalam dan Unik)
const INTERPRETASI = {
    pembagian3: { // Tibane Sandang, Pangan, Papan (Kebutuhan Dasar & Pondasi)
        1: { hasil: "SANDANG", makna: "Kehidupan pernikahan cenderung fokus pada penampilan luar, status sosial, atau pemenuhan kebutuhan sekunder. Rezeki mungkin cukup untuk gaya hidup, namun perlu waspada terhadap kestabilan pondasi (pangan/papan) jangka panjang. Bisa juga berarti sering mendapat anugerah berupa pakaian atau hadiah."},
        2: { hasil: "PANGAN", makna: "Fokus utama kehidupan pernikahan adalah pada pemenuhan kebutuhan pokok (rezeki, makanan). Pasangan ini diramalkan tidak akan kekurangan makanan dan rezeki cenderung lancar untuk kebutuhan sehari-hari. Ini pertanda kestabilan dasar yang baik."},
        3: { hasil: "PAPAN", makna: "Pasangan ini diberkahi kemampuan atau kesempatan untuk memiliki tempat tinggal yang layak dan membangun pondasi rumah tangga yang kuat. Menandakan ketenteraman, kemapanan, dan rasa aman dalam keluarga. Pertanda sangat baik untuk keharmonisan jangka panjang."}
        // Sisa 0 dianggap 3
    },
    pembagian4: { // Tibane Guru, Ratu, Rogo, Pati (Peran Sosial & Potensi Masalah)
        1: { hasil: "GURU", makna: "Pasangan ini berpotensi menjadi sosok yang dihormati, bijaksana, dan menjadi panutan di lingkungannya. Namun, bisa juga diartikan mereka akan menghadapi banyak 'pelajaran' atau cobaan hidup yang mendewasakan. Perlu keseimbangan antara memberi nasihat dan menerima masukan."},
        2: { hasil: "RATU", makna: "Kehidupan pernikahan akan penuh wibawa, disegani, dan harmonis layaknya raja dan ratu. Pasangan ini memiliki aura kepemimpinan dan keberuntungan sosial, seringkali hidup dalam kecukupan dan kehormatan. Pertanda keharmonisan dan status sosial yang tinggi."},
        3: { hasil: "ROGO", makna: "Ada potensi menghadapi masalah terkait kesehatan ('Rogo' berarti badan/fisik) atau 'cacat' dalam keharmonisan rumah tangga (sering sakit, konflik internal, atau masalah psikologis). Perlu perhatian ekstra pada kesehatan fisik, mental, dan komunikasi."},
        4: { hasil: "PATI", makna: "Ini adalah peringatan potensi adanya 'kematian' dalam arti luas: bisa salah satu pasangan berpulang lebih dulu, 'matinya' keharmonisan (perpisahan), atau 'matinya' rezeki/cita-cita bersama. Menandakan rintangan besar atau akhir yang kurang baik. Perlu kewaspadaan tinggi."}
         // Sisa 0 dianggap 4
    },
    pembagian5: { // Pancasuda I: Sri, Dana, Lara, Pati, Lungguh (Fluktuasi Rezeki & Status)
        1: { hasil: "SRI", makna: "Melambangkan kemakmuran, keselamatan, dan keberuntungan. Rumah tangga akan dilimpahi rezeki yang berkah, dihormati, dan mencapai kebahagiaan lahir batin. Ini adalah pertanda rezeki dan keharmonisan tingkat tinggi."},
        2: { hasil: "DANA", makna: "Menunjukkan potensi kekayaan materi atau kelimpahan harta benda ('Dana' berarti harta/uang). Pasangan ini cenderung pandai mencari rezeki atau mendapat warisan, namun perlu diimbangi dengan pengelolaan yang baik agar tidak hanya berfokus pada materi."},
        3: { hasil: "LARA", makna: "Mengindikasikan adanya potensi 'penyakit' ('Lara' berarti sakit) dalam rumah tangga, baik penyakit fisik, kesulitan ekonomi yang menyakitkan, maupun konflik batin yang mengganggu keharmonisan. Membutuhkan kesabaran dan usaha ekstra mengatasi kesulitan."},
        4: { hasil: "PATI", makna: "Serupa dengan pembagian 4, ini adalah pertanda kuat adanya potensi perpisahan (baik karena maut atau cerai) atau kegagalan fatal dalam mencapai tujuan hidup bersama. Risiko yang perlu diwaspadai dengan serius."},
        5: { hasil: "LUNGGUH", makna: "Pasangan ini diramalkan akan meraih kedudukan ('Lungguh' berarti duduk/jabatan), pangkat, atau status sosial yang terhormat. Mereka akan disegani dan memiliki pengaruh di lingkungannya. Pertanda baik untuk karier dan martabat keluarga."}
         // Sisa 0 dianggap 5
    },
    pembagian7: { // Tibane Perjalanan Hidup & Rezeki (Dinamika Kehidupan)
        1: { hasil: "WASESO SEGORO", makna: "Hidupnya luas rezeki dan pengaruhnya seperti samudra ('Segoro'). Berbudi luhur, pemaaf, berwibawa, dan rezekinya melimpah ruah dari berbagai arah. Pertanda kemuliaan dan keberuntungan besar."},
        2: { hasil: "TUNGGAK SEMI", makna: "Rezeki selalu tumbuh kembali ('Semi') meski habis dipakai, seperti tunggak pohon yang bertunas lagi. Pandai mengelola sumber daya, selalu ada jalan keluar dalam kesulitan ekonomi. Pertanda rezeki yang berkelanjutan."},
        3: { hasil: "SATRIO WIBAWO", makna: "Memiliki jiwa kesatria ('Satrio') yang berwibawa. Dihormati, disegani, dan memiliki kharisma kepemimpinan alami. Kehidupan rumah tangganya cenderung stabil dan terpandang."},
        4: { hasil: "SUMUR SINABO", makna: "Menjadi sumber ilmu dan inspirasi ('Sumur') bagi banyak orang, tempat bertanya dan mencari solusi. Memiliki wawasan luas dan jiwa sosial tinggi. Pertanda kebijaksanaan dan manfaat bagi sesama."},
        5: { hasil: "SATRIO WIRANG", makna: "Sering menghadapi cobaan yang memalukan ('Wirang' berarti malu) atau rintangan yang menjatuhkan harga diri. Membutuhkan ketabahan mental yang kuat untuk bangkit dari keterpurukan. Pertanda perjalanan hidup yang berat."},
        6: { hasil: "BUMI KAPETAK", makna: "Pekerja keras, tekun, dan tahan banting seperti tanah ('Bumi') yang terpendam ('Kapetak'). Namun, seringkali hasilnya kurang sepadan, kurang dihargai, atau tersembunyi potensinya. Membutuhkan kesabaran luar biasa."},
        7: { hasil: "LEBU KATIUP ANGIN", makna: "Hidupnya tidak menentu seperti debu ('Lebu') yang tertiup angin. Cita-cita sulit tercapai, sering berpindah-pindah (tempat tinggal/pekerjaan), rezeki tidak stabil, dan rumah tangga kurang tenang. Pertanda ketidakpastian."}
         // Sisa 0 dianggap 7
    },
    pembagian8: { // Pal Srigati - Tingkat Kecocokan Inti (Hasil Akhir Hubungan)
        1: { hasil: "PEGAT", makna: "Secara harfiah berarti cerai atau putus ('Pegat'). Ini adalah sinyal 'lampu merah' paling terang dalam Primbon, menunjukkan potensi konflik destruktif, ketidakcocokan fundamental, atau faktor eksternal yang memaksa perpisahan. Risiko kegagalan sangat tinggi."},
        2: { hasil: "RATU", makna: "Pasangan ini ditakdirkan menjadi 'Ratu', sangat cocok, harmonis, dan disegani banyak orang. Kehidupan mereka penuh kebahagiaan, saling menghargai, dan seringkali menjadi panutan serta membuat iri lingkungan sekitar. Jodoh idaman."},
        3: { hasil: "JODOH", makna: "Menandakan bahwa pasangan ini memang berjodoh secara alami. Mereka bisa saling menerima kekurangan dan kelebihan, memiliki pemahaman yang baik, dan mampu membangun rumah tangga yang rukun meskipun mungkin ada sedikit riak."},
        4: { hasil: "TOPO", makna: "Memerlukan laku 'Topo' atau prihatin di awal pernikahan. Mungkin menghadapi kesulitan ekonomi, ujian adaptasi, atau masalah lain. Namun, jika sabar, tekun, dan saling mendukung, mereka akan meraih kebahagiaan dan kemapanan di kemudian hari."},
        5: { hasil: "TINARI", makna: "Diberkahi kemudahan dalam mencari rezeki ('Tinari' berarti dicari/dihampiri rezeki). Hidupnya cenderung nyaman, berkecukupan materi, sering mendapat keberuntungan tak terduga, dan jauh dari kesulitan ekonomi berarti."},
        6: { hasil: "PADU", makna: "Rumah tangga akan sering diwarnai pertengkaran ('Padu') atau adu argumen, bahkan karena masalah sepele. Atmosfer hubungan cenderung panas dan kompetitif. Meski sering cekcok, biasanya tidak sampai 'Pegat' jika bisa saling mengendalikan ego."},
        7: { hasil: "SUJANAN", makna: "Ada potensi besar untuk perselingkuhan atau masalah akibat ketidaksetiaan ('Sujanan' terkait dengan kecurigaan/perselisihan). Hubungan rentan terhadap godaan pihak ketiga atau konflik hebat yang dipicu oleh rasa cemburu berlebihan. Perlu komitmen dan kepercayaan ekstra."},
        8: { hasil: "PESTHI", makna: "Ditakdirkan ('Pesthi') untuk bersama hingga akhir hayat. Rumah tangga akan berjalan rukun, tenteram, damai, saling mendukung, dan langgeng tanpa banyak gejolak berarti. Ini adalah pertanda keharmonisan sejati dan abadi."}
         // Sisa 0 dianggap 8
    },
    pembagian9: { // Padu Weton (Variasi Nasib & Perilaku)
        1: { hasil: "BANYU MILI", makna: "Rezeki lancar mengalir ('Mili') seperti air ('Banyu'). Kehidupan cenderung mudah, tidak banyak hambatan dalam mencari nafkah, dan selalu ada saja jalan rezekinya. Pertanda kelancaran finansial."},
        2: { hasil: "GROBOGAN WARU", makna: "Rezeki cukup melimpah ('Grobogan' besar, 'Waru' pohon rindang), namun cenderung boros atau cepat habis. Sulit untuk menabung atau menyimpan kekayaan dalam jangka panjang. Perlu pengelolaan keuangan yang bijak."},
        3: { hasil: "WATU GINURIT", makna: "Seperti batu ('Watu') yang dipahat ('Ginurit'), memiliki pendirian kuat, dihormati, dan rezeki cukup. Namun, mungkin ada sedikit kekakuan atau masalah dalam keluarga inti yang perlu diselesaikan."},
        4: { hasil: "PASIR WUKIR", makna: "Seperti pasir ('Pasir') di gunung ('Wukir'), rezeki awalnya sulit didapat dan butuh perjuangan keras. Namun, dengan ketekunan, kesuksesan dan kemakmuran bisa diraih di kemudian hari. Perlu mental baja."},
        5: { hasil: "PANDITO MUKTI", makna: "Menjadi sosok bijaksana ('Pandito') yang mencapai kemuliaan ('Mukti'). Sering berhasil dalam usaha, dihormati, dan hidup berkecukupan. Namun, kadang terlalu fokus pada diri sendiri hingga kurang harmonis dengan pasangan."},
        6: { hasil: "JAGUR MACAN", makna: "Memiliki kewibawaan dan disegani seperti macan ('Macan'). Namun, seringkali banyak musuh, rezeki agak seret, atau hidupnya penuh tantangan dan persaingan. Perlu waspada terhadap konflik."},
        7: { hasil: "LEBU KATIUP ANGIN", makna: "Serupa dengan pembagian 7, hidup tidak tenang, penuh ketidakpastian, cita-cita sulit tercapai, dan rezeki terasa angin-anginan. Menggambarkan fondasi yang rapuh dan kehidupan yang nomaden."},
        8: { hasil: "MACAN KETUWON", makna: "Seperti macan ('Macan') yang terluka ('Ketuwon'), sering mengalami kesialan, banyak masalah, atau merasa tidak puas meskipun kebutuhan dasar tercukupi. Perlu introspeksi dan kehati-hatian dalam bertindak."},
        9: { hasil: "NOhan REMBULAN", makna: "Selalu dinaungi keberuntungan dan kebahagiaan seperti cahaya rembulan ('Rembulan'). Hidupnya cenderung indah, damai, banyak kemudahan, dan disukai banyak orang. Pertanda nasib yang sangat baik."}
         // Sisa 0 dianggap 9
    }
    // Anda bisa menambahkan pembagian 10 jika memiliki aturan dan interpretasinya
};


// Watak dasar Weton (Disempurnakan dengan Nuansa)
const WATAK_WETON = {
    // Minggu
    "Minggu Legi": "Lakuning Lintang: Berkarisma tenang, cerdas secara intuitif, mandiri, cenderung pendiam namun dermawan. Lebih suka bekerja sendiri, kadang terlihat misterius.",
    "Minggu Pahing": "Lakuning Rembulan: Mental kuat, mandiri, berwibawa alami, namun cenderung menyembunyikan perasaan (introvert). Punya potensi welas asih yang besar tapi sulit ditebak.",
    "Minggu Pon": "Lakuning Kembang: Menarik perhatian, pemberani, punya kemauan keras, namun sensitif dan kadang suka pamer pencapaian. Perlu menjaga lisan agar tidak menyakiti.",
    "Minggu Wage": "Lakuning Angin: Murah hati, penurut, mudah bergaul dan disenangi, namun pendiriannya mudah goyah dan gampang dipengaruhi oleh lingkungan.",
    "Minggu Kliwon": "Lakuning Lintang: Berpendirian kuat, bertanggung jawab, sopan, pemaaf, namun cenderung tertutup dan sulit ditebak. Memiliki aura kepemimpinan yang tenang.",

    // Senin
    "Senin Legi": "Lakuning Angin: Ceria, energik, suka berdebat (positif), pandai bergaul dan membawa suasana. Tidak suka dikekang, namun kadang kurang konsisten.",
    "Senin Pahing": "Lakuning Geni: Waspada, pekerja keras sejati, berani menghadapi tantangan. Namun, mudah tersinggung, agak tertutup, dan bisa sangat keras jika marah.",
    "Senin Pon": "Lakuning Kembang: Bertanggung jawab, sopan santun tinggi, menyukai kerapian dan kemewahan. Tegas dalam prinsip, namun bisa terkesan angkuh jika tidak hati-hati.",
    "Senin Wage": "Lakuning Geni: Setia kawan, hemat, penurut pada aturan. Namun, jika marah bisa gelap mata dan sulit melupakan kesalahan orang (pendendam).",
    "Senin Kliwon": "Lakuning Kembang: Pandai bicara dan menarik hati, ramah, berbakti pada orang tua/keluarga. Mudah bersimpati tapi perlu waspada agar tidak mudah dimanfaatkan.",

    // Selasa
    "Selasa Legi": "Lakuning Geni: Tegas, mandiri, punya semangat juang tinggi. Namun, mudah cemburu, tidak suka diperintah, pemurah tapi ledakan amarahnya cukup kuat.",
    "Selasa Pahing": "Lakuning Geni: Ambisius membara, bersemangat, suka menolong tanpa pamrih. Tapi sangat pencemburu, mudah marah, pendendam jika disakiti, perlu belajar mengelola emosi.",
    "Selasa Pon": "Lakuning Kayu: Jujur, teduh hatinya, suka melindungi yang lemah. Namun, cenderung pasif, mudah dipengaruhi, dan lebih suka ketenangan daripada keramaian.",
    "Selasa Wage": "Lakuning Bumi: Teliti, sabar, penurut, dan suka mengalah demi harmoni. Namun, bisa lamban dalam bertindak, agak kaku, dan mudah menaruh curiga.",
    "Selasa Kliwon": "Lakuning Angin (Aras Tuding): Ramah tamah, pandai bicara memikat, kritis dan cerdas. Namun, pendiriannya kadang kurang kokoh dan sering dianggap 'apes' atau menemui halangan.",

    // Rabu
    "Rabu Legi": "Lakuning Kembang: Menjunjung tinggi etika dan kejujuran, membenci ketidakadilan. Setia pada janji, bijaksana dalam bersikap, pandai menempatkan diri.",
    "Rabu Pahing": "Lakuning Banyu: Tenang pembawaannya, sederhana, suka menolong sesama. Teliti dalam pekerjaan, namun cenderung pelupa dan kadang kurang disiplin waktu.",
    "Rabu Pon": "Lakuning Rembulan: Menenangkan seperti rembulan, baik hati, cerdas, sopan. Pandai beradaptasi, namun kadang kurang berani mengambil keputusan tegas.",
    "Rabu Wage": "Lakuning Kembang: Bijaksana, ramah, tidak suka ikut campur urusan orang. Namun, mudah curiga terhadap niat orang lain dan kadang ada sisi sombong tersembunyi.",
    "Rabu Kliwon": "Lakuning Srengenge: Berjiwa pemimpin alami, disiplin, tegas, pandai meyakinkan orang. Namun, tempramental, mudah tersinggung, dan tidak suka dibantah.",

    // Kamis
    "Kamis Legi": "Lakuning Lintang: Memiliki aura kebijaksanaan dan etika tinggi, sering jadi panutan. Cenderung dermawan dan berpendirian kuat. Namun, bisa terlihat kaku, perfeksionis, dan membutuhkan pengakuan atas usahanya.",
    "Kamis Pahing": "Lakuning Gunung: Cita-cita setinggi gunung, cerdas, tekun belajar/bekerja. Namun, suka membantah jika merasa benar, keras hati, dan mudah curiga pada orang baru.",
    "Kamis Pon": "Lakuning Srengenge: Ambisius, tegas, tidak mau kalah saing. Sangat peduli keluarga, cerdas, namun pendendam jika merasa dikhianati atau diremehkan.",
    "Kamis Wage": "Lakuning Kembang: Menarik secara penampilan atau sikap, sopan, penurut. Namun, mudah terpengaruh omongan orang, kadang malas, dan jika marah bisa mengejutkan.",
    "Kamis Kliwon": "Lakuning Banyu: Pekerja keras yang sabar, pandai menyimpan rahasia, berjiwa pengayom. Namun, cenderung boros untuk kesenangan dan sulit memaafkan kesalahan fatal.",

    // Jumat
    "Jumat Legi": "Lakuning Lintang: Jujur dan teguh pada prinsip, rasa simpatinya tinggi. Namun, bisa sangat kaku dalam pandangan, sulit menerima kritik, dan kadang merasa paling benar.",
    "Jumat Pahing": "Lakuning Srengenge: Dermawan tanpa perhitungan, bertanggung jawab penuh, mandiri dan energik. Namun, mudah naik darah, keras kepala, dan sulit dinasihati saat emosi.",
    "Jumat Pon": "Lakuning Lintang: Tenang pembawaannya, berwibawa alami, cerdas dan bijaksana. Namun, cenderung kurang aktif bergaul, lebih suka ketenangan dan menyendiri.",
    "Jumat Wage": "Lakuning Pandita (Aras Pepet): Cerdas, jujur, ringan tangan menolong, setia pada pasangan/teman. Namun, bisa kaku dalam aturan, mudah tergoda hal duniawi, dan sering dianggap 'terhambat' rezekinya.",
    "Jumat Kliwon": "Lakuning Rembulan: Menenangkan hati orang sekitar, sabar luar biasa, berjiwa pemimpin yang mengayomi. Disukai banyak orang karena murah hati dan bijaksana.",

    // Sabtu
    "Sabtu Legi": "Lakuning Rembulan: Ceria, pandai menghidupkan suasana, menghargai orang lain, loyal. Namun, cenderung boros, menyukai kemewahan, dan kadang kurang perhitungan.",
    "Sabtu Pahing": "Lakuning Geni: Semangat juangnya tinggi, pantang menyerah, mudah marah tapi juga mudah memaafkan. Suka membantah jika tidak sesuai logikanya, dermawan pada yang membutuhkan.",
    "Sabtu Pon": "Lakuning Banyu: Sabar menghadapi masalah, bertanggung jawab, suka menolong dengan tulus. Teliti, namun bisa terkesan agak pelit dan kadang egois dalam keputusan.",
    "Sabtu Wage": "Lakuning Bumi: Teguh pendiriannya, mandiri, tidak suka bergantung. Namun, bisa terlihat angkuh, menyukai kemewahan, dan sulit menerima nasihat orang lain.",
    "Sabtu Kliwon": "Lakuning Bumi: Rendah hati, sabar dalam berusaha, suka mengalah demi kedamaian. Bertanggung jawab, namun cenderung lamban mengambil keputusan dan kurang inisiatif."
};