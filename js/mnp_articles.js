(function () {
  'use strict';

  var DEFAULT_AUTHOR = 'Tim Malik Nusantara Persada';

  // helper link foto Unsplash (ukuran 1600px, kualitas 80)
  function unsplash(id) {
    return 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=1600&q=80';
  }

  var IMG_MEP      = unsplash('photo-1778514825784-0659eaf8e7a2'); // Steffen Lemmerzahl - jaringan pipa dan instalasi elektrikal (Unsplash)
  var IMG_WF       = unsplash('photo-1671022442106-c787685d9fed'); // Corey Willett - pile of steel beams
  var IMG_FONDASI  = unsplash('photo-1768677903496-becc4be07258'); // Toni Reed - pemeriksaan tulangan fondasi di proyek (Unsplash)

  var ARTICLES = [
    {
      id: 'mengenal-sistem-mep-dan-perannya-dalam-kinerja-bangunan',
      title: 'Mengenal Sistem MEP dan Perannya dalam Kinerja Bangunan',
      category: 'MEP',
      date: '2026-10-23',
      author: DEFAULT_AUTHOR,
      readTime: '5 menit baca',
      image: IMG_MEP,
      excerpt: 'Sistem MEP tidak selalu terlihat dari luar, tetapi sangat menentukan kenyamanan, keamanan, dan fungsi bangunan. Berikut penjelasan mengenai peran mechanical, electrical, dan plumbing dalam proyek konstruksi.',
      content:
        '<p>Dalam sebuah bangunan, kekuatan struktur memang menjadi hal utama. Namun, bangunan yang baik tidak hanya berdiri kokoh, tetapi juga harus dapat berfungsi dengan nyaman, aman, dan efisien. Di sinilah sistem MEP memegang peranan penting.</p>' +
        '<p>MEP adalah singkatan dari <strong>Mechanical, Electrical, dan Plumbing</strong>. Tiga komponen ini mendukung operasional bangunan sehari-hari, mulai dari sirkulasi udara, distribusi listrik, hingga penyediaan dan pembuangan air. Tanpa perencanaan dan pelaksanaan MEP yang baik, bangunan dapat mengalami banyak kendala meskipun struktur utamanya sudah selesai dibangun.</p>' +
        '<h2>1. Apa Itu Sistem MEP?</h2>' +
        '<p>Secara sederhana, sistem MEP adalah kumpulan instalasi yang membuat bangunan dapat digunakan dengan baik. Sistem ini biasanya direncanakan sejak awal proyek agar dapat terintegrasi dengan arsitektur dan struktur bangunan.</p>' +
        '<p>Berikut pembagian utamanya:</p>' +
        '<ul>' +
        '<li><strong>Mechanical</strong>: mencakup sistem pendingin udara (HVAC), ventilasi, exhaust, dan sistem mekanikal lain yang mendukung kenyamanan ruang.</li>' +
        '<li><strong>Electrical</strong>: mencakup instalasi listrik, panel, pencahayaan, sistem cadangan daya, dan distribusi energi di dalam bangunan.</li>' +
        '<li><strong>Plumbing</strong>: mencakup sistem air bersih, air kotor, sanitasi, drainase, dan distribusi air ke seluruh area bangunan.</li>' +
        '</ul>' +
        '<h2>2. Mengapa Sistem MEP Penting?</h2>' +
        '<p>Sistem MEP berperan besar dalam menentukan kualitas fungsi bangunan. Bangunan yang terlihat baik dari luar belum tentu nyaman digunakan jika sistem MEP-nya tidak direncanakan dengan benar.</p>' +
        '<p>Beberapa alasan mengapa MEP penting antara lain:</p>' +
        '<ul>' +
        '<li>menjaga kenyamanan pengguna bangunan,</li>' +
        '<li>mendukung efisiensi operasional,</li>' +
        '<li>meningkatkan keamanan dan keandalan sistem,</li>' +
        '<li>membantu pemeliharaan jangka panjang,</li>' +
        '<li>serta menunjang nilai guna bangunan secara keseluruhan.</li>' +
        '</ul>' +
        '<p>Pada bangunan komersial, industri, gudang, maupun fasilitas umum, kualitas sistem MEP sering menjadi faktor penting yang memengaruhi performa bangunan dalam jangka panjang.</p>' +
        '<h2>3. Peran Sistem Mechanical</h2>' +
        '<p>Sistem mechanical paling sering dikaitkan dengan pengaturan kualitas udara dan kenyamanan termal di dalam bangunan. Contohnya adalah sistem AC, ventilasi, exhaust fan, dan sistem pengendalian sirkulasi udara.</p>' +
        '<p>Perencanaan mechanical yang baik membantu:</p>' +
        '<ul>' +
        '<li>menjaga suhu ruang tetap nyaman,</li>' +
        '<li>memastikan sirkulasi udara berjalan baik,</li>' +
        '<li>mengurangi kelembapan berlebih,</li>' +
        '<li>dan mendukung kesehatan lingkungan dalam ruangan.</li>' +
        '</ul>' +
        '<p>Pada bangunan tertentu, sistem mechanical juga dapat mencakup peralatan pendukung lain yang berhubungan dengan utilitas bangunan.</p>' +
        '<h2>4. Peran Sistem Electrical</h2>' +
        '<p>Sistem electrical bertugas menyalurkan daya agar seluruh fungsi bangunan dapat berjalan. Sistem ini tidak hanya mencakup lampu dan stop kontak, tetapi juga panel listrik, jalur kabel, proteksi, serta sistem pendukung lainnya.</p>' +
        '<p>Instalasi elektrikal yang direncanakan dengan baik membantu:</p>' +
        '<ul>' +
        '<li>memastikan distribusi daya lebih aman,</li>' +
        '<li>mendukung kebutuhan operasional bangunan,</li>' +
        '<li>mengurangi risiko gangguan listrik,</li>' +
        '<li>dan mempermudah pengembangan sistem di masa mendatang.</li>' +
        '</ul>' +
        '<p>Pada proyek yang lebih kompleks, sistem electrical juga perlu diselaraskan dengan kebutuhan alat, mesin, dan sistem pendukung lain di dalam bangunan.</p>' +
        '<h2>5. Peran Sistem Plumbing</h2>' +
        '<p>Sistem plumbing berhubungan langsung dengan distribusi air bersih dan pengelolaan air buangan. Meskipun sering dianggap sederhana, plumbing yang buruk dapat menyebabkan banyak masalah, seperti kebocoran, genangan, bau tidak sedap, hingga gangguan fungsi bangunan.</p>' +
        '<p>Plumbing yang baik harus memperhatikan:</p>' +
        '<ul>' +
        '<li>distribusi air bersih yang lancar,</li>' +
        '<li>pembuangan air kotor yang aman,</li>' +
        '<li>sistem sanitasi yang sesuai,</li>' +
        '<li>serta drainase yang mendukung kondisi lapangan.</li>' +
        '</ul>' +
        '<p>Perencanaan plumbing yang tepat juga membantu bangunan lebih mudah dirawat dan lebih efisien dalam penggunaan air.</p>' +
        '<h2>6. Pentingnya Koordinasi MEP Sejak Awal Proyek</h2>' +
        '<p>Salah satu tantangan terbesar dalam pekerjaan MEP adalah koordinasi. Jalur pipa, kabel, ducting, dan elemen utilitas lainnya harus direncanakan agar tidak saling bertabrakan maupun mengganggu elemen struktur dan arsitektur.</p>' +
        '<p>Karena itu, koordinasi MEP sebaiknya dilakukan sejak awal proyek, bukan setelah pekerjaan struktur atau finishing berjalan. Dengan koordinasi yang baik, proyek dapat mengurangi potensi bongkar pasang, menekan pemborosan biaya, dan menjaga jadwal pekerjaan tetap terkendali.</p>' +
        '<h2>7. Risiko Jika Sistem MEP Tidak Direncanakan dengan Baik</h2>' +
        '<p>Kurangnya perhatian pada sistem MEP dapat menimbulkan berbagai persoalan, seperti:</p>' +
        '<ul>' +
        '<li>ruang terasa panas atau pengap,</li>' +
        '<li>distribusi listrik tidak memadai,</li>' +
        '<li>kebocoran pada instalasi air,</li>' +
        '<li>gangguan operasional bangunan,</li>' +
        '<li>hingga meningkatnya biaya perawatan setelah bangunan digunakan.</li>' +
        '</ul>' +
        '<p>Karena itu, sistem MEP tidak boleh dipandang sebagai pekerjaan pelengkap semata. MEP merupakan bagian penting yang menentukan bagaimana sebuah bangunan berfungsi secara nyata.</p>' +
        '<h2>Penutup</h2>' +
        '<p>Sistem MEP adalah elemen vital dalam sebuah bangunan karena berhubungan langsung dengan kenyamanan, keamanan, dan efisiensi penggunaan bangunan. Perencanaan yang matang, koordinasi lintas pekerjaan, serta pelaksanaan yang tepat akan sangat memengaruhi hasil akhir proyek.</p>' +
        '<p>Di <strong>Malik Nusantara Persada</strong>, kami memahami bahwa kualitas bangunan tidak hanya ditentukan oleh struktur, tetapi juga oleh sistem yang mendukung kinerjanya secara menyeluruh. Untuk diskusi kebutuhan proyek konstruksi, silakan <a href="#contact">hubungi tim kami</a>.</p>'
    },
    {
      id: 'tips-memeriksa-baja-wf-sebelum-diterima',
      title: 'Baja WF untuk Struktur Bangunan: 6 Hal yang Perlu Dicek Sebelum Material Diterima di Proyek',
      category: 'Struktur Baja',
      date: '2026-10-21',
      author: DEFAULT_AUTHOR,
      readTime: '4 menit baca',
      image: IMG_WF,
      excerpt: 'Kualitas struktur baja dimulai dari material yang masuk ke lokasi. Berikut enam pemeriksaan sederhana yang membantu pemilik proyek dan tim lapangan memastikan baja WF sesuai spesifikasi.',
      content:
        '<p>Baja Wide Flange (WF) adalah profil berpenampang menyerupai huruf I dengan sayap lebar, dan menjadi salah satu elemen paling umum pada balok dan kolom bangunan industri, gudang, hingga gedung bentang lebar. Karena menjadi tulang punggung struktur, material ini perlu diperiksa sejak pertama kali tiba di lokasi proyek, bukan setelah terpasang.</p>' +
        '<h2>Memahami Penamaan Profil</h2>' +
        '<p>Ukuran WF umumnya ditulis berurutan: tinggi, lebar sayap, tebal badan (web), dan tebal sayap (flange), semuanya dalam milimeter. Misalnya, WF 300 x 150 x 6,5 x 9 berarti tinggi 300 mm, lebar sayap 150 mm, tebal badan 6,5 mm, dan tebal sayap 9 mm. Pastikan yang tiba di proyek sesuai dengan yang tercantum pada gambar kerja dan daftar material.</p>' +
        '<h2>1. Periksa Tanda SNI dan Dokumen Produk</h2>' +
        '<p>Baja profil WF memiliki standar nasional, yaitu SNI 07-7178-2006, dan pemberlakuan SNI untuk baja profil pernah ditetapkan secara wajib oleh Kementerian Perindustrian. Untuk produk lokal, mintalah bukti tanda SNI atau SPPT-SNI sesuai persyaratan spesifikasi proyek. Untuk produk impor, pastikan standar yang dipakai dinyatakan jelas, misalnya ASTM, EN, atau JIS.</p>' +
        '<h2>2. Baca Mill Certificate dengan Teliti</h2>' +
        '<p>Mill certificate (sertifikat uji pabrik) memuat komposisi kimia dan sifat mekanis baja. Perhatikan tiga hal berikut:</p>' +
        '<ul>' +
        '<li>mutu baja (grade) sama dengan yang disyaratkan perencana,</li>' +
        '<li>kuat leleh, kuat tarik, dan perpanjangan memenuhi nilai minimum standar,</li>' +
        '<li>nomor heat/lot di sertifikat sesuai dengan penandaan pada batang baja.</li>' +
        '</ul>' +
        '<p>Sebagai gambaran, tabel sifat mekanis pada standar baja struktur lama di Indonesia mencantumkan kuat leleh minimum sekitar 240 MPa untuk BJ 37, 250 MPa untuk BJ 41, dan 290 MPa untuk BJ 50. Mutu internasional seperti ASTM A36 memiliki kuat leleh minimum sekitar 250 MPa. Selalu rujuk spesifikasi proyek dan standar edisi yang berlaku.</p>' +
        '<h2>3. Ukur Dimensi dan Kelurusan</h2>' +
        '<p>Ukur tinggi, lebar sayap, serta tebal badan dan sayap pada beberapa titik dengan alat ukur yang terkalibrasi. Tebal yang kurang dari toleransi berarti kapasitas penampang berkurang. Periksa juga kelurusan batang dengan membidik sepanjang bentang, karena batang yang melengkung akan menyulitkan perakitan dan pemasangan.</p>' +
        '<h2>4. Inspeksi Visual Permukaan</h2>' +
        '<p>Periksa adanya karat berlapis (bukan sekadar karat tipis permukaan), retak, lipatan, goresan dalam, atau lapisan baja yang terkelupas. Cacat seperti ini sebaiknya dicatat dan difoto sebelum material diterima.</p>' +
        '<h2>5. Pastikan Penandaan Dapat Ditelusuri</h2>' +
        '<p>Tiap batang idealnya memiliki penandaan pabrik dan nomor yang bisa dicocokkan dengan sertifikat. Kemampuan telusur (traceability) ini penting bila di kemudian hari ada pertanyaan tentang mutu material pada bagian tertentu bangunan.</p>' +
        '<h2>6. Simpan dengan Benar</h2>' +
        '<p>Letakkan baja di atas bantalan kayu atau penyangga agar tidak bersentuhan langsung dengan tanah, susun rapi berdasarkan ukuran, dan lindungi dari genangan air. Penyimpanan yang baik mencegah korosi dini dan kerusakan bentuk sebelum material dipasang.</p>' +
        '<h2>Penutup</h2>' +
        '<p>Pemeriksaan material tidak memerlukan alat yang rumit, tetapi membutuhkan disiplin dan dokumentasi. Di Malik Nusantara Persada, kontrol mutu material menjadi bagian dari komitmen kami pada setiap pekerjaan struktur baja. Untuk konsultasi proyek, silakan <a href="#contact">hubungi tim kami</a>.</p>'
    },
    {
      id: 'mengenal-jenis-fondasi-bangunan-dan-faktor-pemilihannya',
      title: 'Mengenal Jenis Fondasi Bangunan dan Faktor yang Menentukan Pemilihannya',
      category: 'Fondasi Bangunan',
      date: '2026-10-19',
      author: DEFAULT_AUTHOR,
      readTime: '6 menit baca',
      image: IMG_FONDASI,
      excerpt: 'Fondasi yang tepat ditentukan oleh kondisi tanah, beban struktur, dan kebutuhan pelaksanaan. Kenali jenis fondasi dangkal dan dalam serta faktor penting dalam pemilihannya.',
      content:
        "<p>Setiap bangunan memerlukan fondasi yang mampu meneruskan beban struktur ke tanah pendukung secara aman. Walaupun sebagian besar berada di bawah permukaan tanah dan tidak terlihat setelah pekerjaan selesai, fondasi berperan penting terhadap kestabilan dan kinerja bangunan dalam jangka panjang.</p>" +
        "<p>Tidak semua proyek membutuhkan jenis fondasi yang sama. Pilihannya bergantung pada kondisi tanah, besarnya beban bangunan, lingkungan sekitar, serta metode pelaksanaan yang memungkinkan di lapangan. Karena itu, pemilihan fondasi perlu didasarkan pada hasil penyelidikan tanah dan perencanaan teknis, bukan sekadar kebiasaan dari proyek sebelumnya.</p>" +
        "<h2>1. Apa Itu Fondasi Bangunan?</h2>" +
        "<p>Fondasi adalah bagian struktur bawah yang menerima beban dari kolom, dinding, atau elemen bangunan lainnya dan meneruskannya ke tanah atau batuan pendukung. Perencanaannya tidak cukup hanya mempertimbangkan kemampuan tanah menahan beban, tetapi juga harus membatasi penurunan total maupun perbedaan penurunan antartitik agar tidak mengganggu struktur di atasnya.</p>" +
        "<p>Secara umum, fondasi dapat dikelompokkan menjadi dua kategori utama, yaitu fondasi dangkal dan fondasi dalam.</p>" +
        "<h2>2. Mengenal Jenis Fondasi Dangkal</h2>" +
        "<p>Fondasi dangkal menyalurkan beban ke lapisan tanah yang relatif dekat dengan permukaan. Jenis ini dapat dipertimbangkan apabila lapisan tanah di kedalaman dangkal mempunyai daya dukung dan karakteristik penurunan yang memenuhi kebutuhan struktur.</p>" +
        "<ul><li><strong>Fondasi telapak (isolated footing)</strong>: umumnya ditempatkan di bawah satu kolom untuk menyebarkan beban ke bidang tanah yang lebih luas. Banyak dijumpai pada bangunan dengan tata letak kolom yang teratur.</li><li><strong>Fondasi menerus atau lajur (strip footing)</strong>: memanjang mengikuti dinding pemikul beban atau deretan elemen struktur tertentu. Ukuran dan penggunaannya ditentukan berdasarkan beban serta kondisi tanah.</li><li><strong>Fondasi rakit (raft atau mat foundation)</strong>: berupa pelat fondasi yang menopang sejumlah kolom atau bagian bangunan secara bersama. Dapat dipertimbangkan ketika fondasi telapak terpisah kurang efisien atau diperlukan distribusi beban yang lebih menyeluruh.</li></ul>" +
        "<p>Pada pekerjaan tertentu, fondasi pasangan batu kali juga dikenal sebagai bentuk fondasi menerus untuk konstruksi ringan. Namun, kesesuaiannya tetap harus dievaluasi menurut desain, beban, dan kondisi tanah setempat.</p>" +
        "<h2>3. Mengenal Jenis Fondasi Dalam</h2>" +
        "<p>Fondasi dalam digunakan ketika lapisan tanah di kedalaman dangkal tidak memadai, tuntutan beban lebih besar, atau kondisi proyek menuntut sistem yang dapat menyalurkan beban ke lapisan yang lebih dalam. Kapasitasnya dapat berasal dari tahanan ujung, gesekan sepanjang sisi fondasi, atau kombinasi keduanya.</p>" +
        "<ul><li><strong>Tiang pancang (driven pile)</strong>: elemen fondasi yang dibuat terlebih dahulu lalu dipasang dengan metode pemancangan. Pemilihannya perlu mempertimbangkan kapasitas, akses alat, serta getaran dan kebisingan di sekitar proyek.</li><li><strong>Tiang bor (bored pile)</strong>: dibentuk dengan pengeboran lubang tanah, pemasangan tulangan, kemudian pengecoran beton di tempat. Metode ini dapat mengurangi getaran dibandingkan pemancangan, tetapi menuntut pengendalian mutu pengeboran dan pengecoran yang baik.</li></ul>" +
        "<p>Jenis fondasi dalam yang paling tepat tidak dapat ditentukan hanya dari jumlah lantai bangunan. Dua proyek dengan tinggi bangunan serupa pun dapat memerlukan desain fondasi yang berbeda karena kondisi tanah dan pembebanannya tidak sama.</p>" +
        "<h2>4. Faktor yang Menentukan Pemilihan Fondasi</h2>" +
        "<p>Sebelum menetapkan jenis fondasi, tim perencana perlu membandingkan beberapa aspek berikut:</p>" +
        "<ul><li><strong>Kondisi dan daya dukung tanah</strong>: sifat tanah, urutan lapisan, dan kedalaman lapisan pendukung diperoleh melalui penyelidikan geoteknik.</li><li><strong>Beban dan karakter bangunan</strong>: besar beban vertikal, beban lateral, serta kebutuhan struktur memengaruhi tipe, dimensi, dan jumlah elemen fondasi.</li><li><strong>Penurunan tanah</strong>: bukan hanya aman terhadap keruntuhan tanah, desain juga harus mengendalikan penurunan total dan penurunan diferensial.</li><li><strong>Muka air tanah</strong>: kondisi air tanah dapat memengaruhi penggalian, metode pelaksanaan, kestabilan lubang, dan kebutuhan pengendalian air.</li><li><strong>Lingkungan sekitar</strong>: jarak terhadap bangunan tetangga, batas lahan, utilitas bawah tanah, serta risiko getaran dan kebisingan perlu dipertimbangkan.</li><li><strong>Efisiensi pelaksanaan</strong>: akses alat berat, waktu pengerjaan, ketersediaan material, pengawasan mutu, dan biaya keseluruhan ikut menentukan alternatif yang paling sesuai.</li></ul>" +
        "<h2>5. Mengapa Penyelidikan Tanah Diperlukan?</h2>" +
        "<p>Penyelidikan tanah membantu perencana memahami kondisi di bawah lokasi proyek sebelum memilih sistem fondasi. Metode yang umum digunakan antara lain uji penetrasi konus (CPT atau sondir), pengeboran tanah yang dapat disertai Standard Penetration Test (SPT), pengambilan sampel, dan pengujian laboratorium sesuai kebutuhan.</p>" +
        "<p>Data tersebut dipakai sebagai dasar analisis daya dukung, potensi penurunan, kondisi air tanah, dan risiko geoteknik lainnya. Ruang lingkup serta kedalaman penyelidikan harus disesuaikan dengan jenis bangunan dan kompleksitas kondisi tanah di lokasi.</p>" +
        "<h2>6. Apa Risiko Jika Jenis Fondasi Tidak Tepat?</h2>" +
        "<p>Keputusan fondasi yang tidak sesuai dengan kondisi aktual dapat meningkatkan risiko penurunan berlebihan, retak pada elemen bangunan, gangguan fungsi pintu atau lantai, bahkan masalah stabilitas struktur. Perbaikan setelah konstruksi berlangsung juga dapat lebih rumit dan mahal dibandingkan pengendalian risiko sejak tahap desain.</p>" +
        "<p>Oleh sebab itu, hasil penyelidikan tanah, analisis geoteknik, desain struktur, dan rencana metode pelaksanaan perlu dikoordinasikan sebelum pekerjaan fondasi dimulai.</p>" +
        "<h2>Penutup</h2>" +
        "<p>Tidak ada satu jenis fondasi yang paling baik untuk semua bangunan. Fondasi telapak, menerus, rakit, tiang pancang, maupun bored pile memiliki fungsi dan pertimbangan penggunaan masing-masing. Pemilihannya harus mengutamakan keselamatan, kinerja jangka panjang, dan kesesuaian dengan kondisi lapangan.</p>" +
        "<p>Di <strong>Malik Nusantara Persada</strong>, kami memandang perencanaan serta koordinasi pekerjaan struktur bawah sebagai bagian penting dari kualitas konstruksi secara menyeluruh. Untuk mendiskusikan kebutuhan proyek Anda, silakan <a href=\"#contact\">hubungi tim kami</a>.</p>" +
        "<h2>Referensi Teknis</h2>" +
        "<p>SNI 8460:2017, <em>Persyaratan perancangan geoteknik</em>. Informasi standar tersedia melalui <a href=\"https://binamarga.pu.go.id/index.php/nspk/detail/sni-84602017-persyaratan-perancangan-geoteknik\" target=\"_blank\" rel=\"noopener noreferrer\">Direktorat Jenderal Bina Marga</a>. Penerapan teknis harus mengikuti standar dan ketentuan yang berlaku untuk proyek terkait.</p>"
    }
  ];

  var PAGE_SIZE = 6;
  var DETAIL_URL = 'mnp_article_detail.html?id=';
  var MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  // urut terbaru -> terlama
  var sorted = ARTICLES.slice().sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function fmtDate(iso) {
    var p = iso.split('-');
    return parseInt(p[2], 10) + ' ' + MONTHS[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }

  function link(a) { return DETAIL_URL + encodeURIComponent(a.id); }

  // revealIdx (angka) hanya dipakai di homepage supaya animasi scroll-reveal jalan
  function cardHTML(a, revealIdx) {
    var reveal = (typeof revealIdx === 'number')
      ? ' reveal-up' + (revealIdx > 0 ? ' reveal-delay-' + revealIdx : '')
      : '';
    return '<div class="col-md-6 col-lg-4">' +
      '<a href="' + link(a) + '" class="article-card-link">' +
        '<article class="article-card' + reveal + '">' +
          '<div class="article-thumb">' +
            '<img src="' + esc(a.image) + '" alt="' + esc(a.title) + '" loading="lazy">' +
            '<span class="article-tag">' + esc(a.category) + '</span>' +
          '</div>' +
          '<div class="article-body">' +
            '<span class="article-date"><i class="bi bi-calendar3"></i> ' + fmtDate(a.date) + '</span>' +
            '<h6>' + esc(a.title) + '</h6>' +
            '<p>' + esc(a.excerpt) + '</p>' +
            '<span class="article-more">Baca selengkapnya <i class="bi bi-arrow-right"></i></span>' +
          '</div>' +
        '</article>' +
      '</a>' +
    '</div>';
  }

  /* ---------------------------------------------------------
     HOME  (index.html) - 3 artikel terbaru
     --------------------------------------------------------- */
  function initHome() {
    $('homeArticlesGrid').innerHTML = sorted.slice(0, 3).map(function (a, i) {
      return cardHTML(a, i);
    }).join('');
  }

  /* ---------------------------------------------------------
     HALAMAN LIST  (mnp_articles.html)
     --------------------------------------------------------- */
  function initList() {
    var grid = $('articlesGrid');
    var featuredEl = $('featuredArticle');
    var featuredSection = $('featuredSection');
    var filtersEl = $('articleFilters');
    var searchEl = $('articleSearch');
    var countEl = $('articlesCount');
    var emptyEl = $('articlesEmpty');
    var moreBtn = $('loadMoreBtn');

    var state = { category: 'Semua', query: '', visible: PAGE_SIZE };
    var featured = sorted[0];
    var rest = sorted.slice(1);

    function renderFeatured() {
      if (!featured) { featuredSection.classList.add('d-none'); return; }
      featuredEl.innerHTML =
        '<a href="' + link(featured) + '" class="featured-article">' +
          '<div class="featured-thumb">' +
            '<img src="' + esc(featured.image) + '" alt="' + esc(featured.title) + '">' +
            '<span class="article-tag">' + esc(featured.category) + '</span>' +
          '</div>' +
          '<div class="featured-body">' +
            '<span class="article-date"><i class="bi bi-calendar3"></i> ' + fmtDate(featured.date) + '</span>' +
            '<h2>' + esc(featured.title) + '</h2>' +
            '<p>' + esc(featured.excerpt) + '</p>' +
            '<span class="article-more">Baca selengkapnya <i class="bi bi-arrow-right"></i></span>' +
          '</div>' +
        '</a>';
    }

    function renderFilters() {
      var cats = ['Semua'];
      rest.forEach(function (a) { if (cats.indexOf(a.category) === -1) cats.push(a.category); });
      filtersEl.innerHTML = cats.map(function (c) {
        return '<button type="button" class="filter-chip' + (c === state.category ? ' active' : '') +
               '" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
      }).join('');
    }

    function matches(a) {
      var okCat = state.category === 'Semua' || a.category === state.category;
      var q = state.query.trim().toLowerCase();
      var okQ = !q || (a.title + ' ' + a.excerpt + ' ' + a.category).toLowerCase().indexOf(q) !== -1;
      return okCat && okQ;
    }

    function renderGrid() {
      var list = rest.filter(matches);
      var shown = list.slice(0, state.visible);

      grid.innerHTML = shown.map(function (a) { return cardHTML(a); }).join('');
      emptyEl.classList.toggle('d-none', list.length > 0);
      moreBtn.classList.toggle('d-none', list.length <= state.visible);
      countEl.textContent = list.length
        ? 'Menampilkan ' + shown.length + ' dari ' + list.length + ' artikel'
        : '';
    }

    filtersEl.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-chip');
      if (!btn) return;
      state.category = btn.getAttribute('data-cat');
      state.visible = PAGE_SIZE;
      renderFilters();
      renderGrid();
    });

    searchEl.addEventListener('input', function () {
      state.query = searchEl.value;
      state.visible = PAGE_SIZE;
      renderGrid();
    });

    moreBtn.addEventListener('click', function () {
      state.visible += PAGE_SIZE;
      renderGrid();
    });

    renderFeatured();
    renderFilters();
    renderGrid();
  }

  /* ---------------------------------------------------------
     HALAMAN DETAIL  (mnp_article_detail.html)
     --------------------------------------------------------- */
  function initDetail() {
    var id = new URLSearchParams(location.search).get('id');
    var idx = -1;
    sorted.forEach(function (a, i) { if (a.id === id) idx = i; });
    var article = idx > -1 ? sorted[idx] : null;

    // artikel tidak ditemukan
    if (!article) {
      document.title = 'Artikel tidak ditemukan | PT MALIK NUSANTARA PERSADA';
      $('dCrumb').textContent = 'Tidak ditemukan';
      $('dTitle').textContent = 'Artikel tidak ditemukan';
      $('dTag').classList.add('d-none');
      document.querySelector('.detail-meta').classList.add('d-none');
      document.querySelector('.article-cover').classList.add('d-none');
      document.querySelector('.article-share').classList.add('d-none');
      $('dNav').classList.add('d-none');
      $('dMissing').classList.remove('d-none');
      $('relatedSection').classList.add('d-none');
      return;
    }

    // header + isi
    document.title = article.title + ' | PT MALIK NUSANTARA PERSADA';
    $('dCrumb').textContent = article.title;
    $('dTag').textContent = article.category;
    $('dTitle').textContent = article.title;
    $('dDate').textContent = fmtDate(article.date);
    $('dAuthor').textContent = article.author || DEFAULT_AUTHOR;
    $('dRead').textContent = article.readTime || '';

    var cover = $('dCover');
    cover.src = article.image;
    cover.alt = article.title;

    // content ditulis sendiri oleh tim di ARTICLES di atas (HTML tepercaya)
    $('dContent').innerHTML = article.content || '';

    // sebelumnya / berikutnya
    var newer = idx > 0 ? sorted[idx - 1] : null;
    var older = idx < sorted.length - 1 ? sorted[idx + 1] : null;
    if (!older && !newer) {
      $('dNav').classList.add('d-none');
    } else {
      $('dNav').innerHTML =
        (older
          ? '<a href="' + link(older) + '" class="prev"><small><i class="bi bi-arrow-left"></i> Artikel sebelumnya</small><span>' + esc(older.title) + '</span></a>'
          : '<span></span>') +
        (newer
          ? '<a href="' + link(newer) + '" class="next"><small>Artikel berikutnya <i class="bi bi-arrow-right"></i></small><span>' + esc(newer.title) + '</span></a>'
          : '<span></span>');
    }

    // artikel lainnya: kategori sama dulu, lalu yang terbaru
    var others = sorted.filter(function (a) { return a.id !== article.id; });
    others.sort(function (a, b) {
      var sa = a.category === article.category ? 0 : 1;
      var sb = b.category === article.category ? 0 : 1;
      return sa - sb || b.date.localeCompare(a.date);
    });
    others = others.slice(0, 3);

    if (!others.length) {
      $('relatedSection').classList.add('d-none');
    } else {
      $('dRelated').innerHTML = others.map(function (a) { return cardHTML(a); }).join('');
    }

    // share + salin tautan
    var url = encodeURIComponent(location.href);
    var text = encodeURIComponent(article.title);
    $('shareWa').href = 'https://wa.me/?text=' + text + '%20' + url;
    $('shareLi').href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
    $('shareFb').href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;

    $('copyLink').addEventListener('click', function () {
      var note = $('copyNote');
      function done() {
        note.classList.add('show');
        setTimeout(function () { note.classList.remove('show'); }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(location.href).then(done);
      } else {
        var t = document.createElement('input');
        t.value = location.href;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        done();
      }
    });
  }

  /* ---------------------------------------------------------
     JALANKAN sesuai halaman
     --------------------------------------------------------- */
  if ($('homeArticlesGrid')) initHome();
  if ($('articlesGrid')) initList();
  if ($('dContent')) initDetail();
})();