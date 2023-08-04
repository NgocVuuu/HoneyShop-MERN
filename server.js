require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 6000;
const MONGODB_URI = process.env.MONGODB_URI;

// Cấu hình middleware
const corsOptions = {
  origin: 'http://localhost:3000', // Đổi thành nguồn gốc của ứng dụng frontend của bạn
  methods: 'GET, POST, DELETE', // Các phương thức yêu cầu được chấp nhận
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Kết nối tới MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error('Lỗi kết nối tới MongoDB:', error));
db.once('open', () => console.log('Đã kết nối thành công tới MongoDB!'));

// Định nghĩa các routes ở đây
const honeyRoutes = require('./routes/honey');
app.use('/api/honey', honeyRoutes);

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server đang lắng nghe tại cổng ${PORT}`);
});
