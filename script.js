// ============================================================
//  Todos App - ES6 Features Demo
//  Mengambil data dari JSONPlaceholder API
// ============================================================

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// ── 1. Fetch data dari API publik ────────────────────────────
const fetchTodos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Gagal mengambil data: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

// ── 2. Proses data dengan ES6 ────────────────────────────────
const processTodos = (todos) => {
  // Destructuring + map → ambil hanya field yang dibutuhkan
  const processed = todos.map(({ id, title, completed, userId }) => ({
    id,
    userId,
    title,
    completed,
    // Template literal
    label: `[User ${userId}] #${id}: ${title}`,
    status: completed ? "✅ Selesai" : "⏳ Belum Selesai",
  }));
  return processed;
};

// ── 3. Kelompokkan berdasarkan status penyelesaian ───────────
const groupByStatus = (todos) => {
  const completed   = todos.filter(({ completed }) => completed);
  const incomplete  = todos.filter(({ completed }) => !completed);
  return { completed, incomplete };
};

// ── 4. Ringkasan statistik ───────────────────────────────────
const generateStats = (todos, grouped) => {
  const { completed, incomplete } = grouped;

  // Hitung jumlah unik userId
  const uniqueUsers = [...new Set(todos.map(({ userId }) => userId))];

  // User paling produktif (terbanyak tugas selesai)
  const completedPerUser = completed.reduce((acc, { userId }) => {
    acc[userId] = (acc[userId] || 0) + 1;
    return acc;
  }, {});
  const [topUserId, topCount] = Object.entries(completedPerUser)
    .sort(([, a], [, b]) => b - a)[0];

  return {
    total       : todos.length,
    selesai     : completed.length,
    belumSelesai: incomplete.length,
    persentase  : `${((completed.length / todos.length) * 100).toFixed(1)}%`,
    jumlahUser  : uniqueUsers.length,
    topUser     : { userId: topUserId, jumlahSelesai: topCount },
  };
};

// ── 5. Tampilkan hasil ───────────────────────────────────────
const displayResults = (stats, grouped) => {
  const { completed, incomplete } = grouped;

  console.log("=".repeat(55));
  console.log("           📋  RINGKASAN STATISTIK TODOS");
  console.log("=".repeat(55));
  console.log(`  Total Tugas        : ${stats.total}`);
  console.log(`  ✅ Selesai         : ${stats.selesai}`);
  console.log(`  ⏳ Belum Selesai   : ${stats.belumSelesai}`);
  console.log(`  📊 Tingkat Selesai : ${stats.persentase}`);
  console.log(`  👥 Jumlah User     : ${stats.jumlahUser}`);
  console.log(
    `  🏆 User Teraktif   : User ${stats.topUser.userId} (${stats.topUser.jumlahSelesai} tugas selesai)`
  );
  console.log("=".repeat(55));

  // Tampilkan 5 tugas selesai
  console.log("\n✅  5 Tugas Selesai Pertama:");
  console.log("-".repeat(55));
  completed.slice(0, 5).forEach(({ label }) => console.log(`  ${label}`));

  // Tampilkan 5 tugas belum selesai
  console.log("\n⏳  5 Tugas Belum Selesai Pertama:");
  console.log("-".repeat(55));
  incomplete.slice(0, 5).forEach(({ label }) => console.log(`  ${label}`));

  console.log("\n" + "=".repeat(55));
  console.log("  ✔  Selesai diproses!");
  console.log("=".repeat(55));
};

// ── Main: async/await + error handling ──────────────────────
const main = async () => {
  try {
    console.log("⏳  Mengambil data dari API...\n");

    const rawTodos = await fetchTodos();          // 1. Fetch
    const todos    = processTodos(rawTodos);      // 2. Proses (ES6)
    const grouped  = groupByStatus(todos);        // 3. Kelompokkan
    const stats    = generateStats(todos, grouped); // 4. Statistik
    displayResults(stats, grouped);               // 5. Tampilkan

  } catch (error) {
    // 5. Error handling — aplikasi tetap berjalan
    console.error(`\n❌  Terjadi kesalahan: ${error.message}`);
    console.log("ℹ️   Aplikasi tetap berjalan. Silakan coba lagi.\n");
  }
};

main();