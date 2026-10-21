(function () {
  'use strict';

  var PLACEHOLDER_CONTENT =
    '<p>Paragraf pembuka artikel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>' +
    '<h2>Subjudul</h2>' +
    '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>' +
    '<p>Untuk informasi lebih lanjut tentang layanan kami, silakan <a href="#contact">hubungi tim Malik Nusantara Persada</a>.</p>';

  var DEFAULT_AUTHOR = 'Tim Malik Nusantara Persada';

  var ARTICLES = [
    {
      id: 'judul-artikel-pertama',
      title: 'Judul',
      category: 'Konstruksi',
      date: '2026-10-10',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/solo_malang/rsau_solomalang1.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content:
        '<p>Paragraf pembuka artikel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
        '<h2>Subjudul Pertama</h2>' +
        '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>' +
        '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>' +
        '<figure class="article-figure"><img src="images/portfolio/gresik/mgi_gresik3.png" alt="Dokumentasi proyek" loading="lazy"><figcaption>Keterangan foto, misalnya nama proyek dan lokasi.</figcaption></figure>' +
        '<h2>Subjudul Kedua</h2>' +
        '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>' +
        '<ul><li>Poin pertama yang ingin ditekankan dalam artikel.</li><li>Poin kedua, bisa berupa tahapan atau standar kerja.</li><li>Poin ketiga sebagai penutup daftar.</li></ul>' +
        '<blockquote>Kutipan penting dari artikel atau pernyataan perusahaan ditaruh di sini.</blockquote>' +
        '<h3>Sub-subjudul</h3>' +
        '<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>' +
        '<h2>Penutup</h2>' +
        '<p>Paragraf penutup yang merangkum isi artikel. Untuk informasi lebih lanjut tentang layanan kami, silakan <a href="#contact">hubungi tim Malik Nusantara Persada</a>.</p>'
    },
    {
      id: 'judul-artikel-kedua',
      title: 'Judul Artikel Kedua Tentang Struktur Baja',
      category: 'Struktur Baja',
      date: '2026-09-28',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/gresik/mgi_gresik3.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
    },
    {
      id: 'judul-artikel-ketiga',
      title: 'Judul Artikel Ketiga Tentang Infrastruktur',
      category: 'Infrastruktur',
      date: '2026-09-15',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/madura/restareamadura3.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
    },
    {
      id: 'judul-artikel-keempat',
      title: 'Judul Artikel Keempat Tentang Keselamatan Kerja',
      category: 'Konstruksi',
      date: '2026-09-02',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/kendari/bi_kendari1.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
    },
    {
      id: 'judul-artikel-kelima',
      title: 'Judul Artikel Kelima Tentang Fabrikasi Baja',
      category: 'Struktur Baja',
      date: '2026-08-20',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/trenggalek/sr_trenggalek_new.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
    },
    {
      id: 'judul-artikel-keenam',
      title: 'Judul Artikel Keenam Tentang Pekerjaan Sipil',
      category: 'Infrastruktur',
      date: '2026-08-05',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/samarinda/rsudaws_4.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
    },
    {
      id: 'judul-artikel-ketujuh',
      title: 'Judul Artikel Ketujuh Tentang Manajemen Proyek',
      category: 'Konstruksi',
      date: '2026-07-18',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/pasuruan/sr_pasuruan1.jpeg',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
    },
    {
      id: 'judul-artikel-kedelapan',
      title: 'Judul Artikel Kedelapan Tentang Standar Mutu',
      category: 'Konstruksi',
      date: '2026-07-01',
      author: DEFAULT_AUTHOR,
      image: 'images/portfolio/rote/rote1.png',
      excerpt: 'Ringkasan singkat artikel, dua sampai tiga kalimat yang menjelaskan isi tulisan.',
      content: PLACEHOLDER_CONTENT
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

  function cardHTML(a) {
    return '<div class="col-md-6 col-lg-4">' +
      '<a href="' + link(a) + '" class="article-card-link">' +
        '<article class="article-card">' +
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

      grid.innerHTML = shown.map(cardHTML).join('');
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
      $('dRelated').innerHTML = others.map(cardHTML).join('');
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
  if ($('articlesGrid')) initList();
  if ($('dContent')) initDetail();
})();