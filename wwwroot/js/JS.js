document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo cuộn về đầu trang khi trang đã tải xong
    window.scrollTo(0, 0);
    
    // Lấy các phần tử cần thiết
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        let currentImageIndex = 0;

        // Mảng chứa URL ảnh (bao gồm ảnh chính và các thumbnail)
        const imageUrls = Array.from(thumbnails).map(thumb => thumb.src);
        imageUrls.unshift(mainImage.src); // Thêm ảnh chính vào đầu mảng

        // Chuyển đến ảnh tiếp theo
        function showNextImage() {
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            mainImage.src = imageUrls[currentImageIndex];
        }

        // Chuyển đến ảnh trước
        function showPrevImage() {
            currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            mainImage.src = imageUrls[currentImageIndex];
        }

        // Cập nhật ảnh khi click vào thumbnail
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', function() {
                currentImageIndex = index + 1; // +1 vì ảnh chính đã được thêm vào đầu mảng
                mainImage.src = thumbnail.src;
            });
        });

        // Xử lý sự kiện cho nút Next
        nextBtn.addEventListener('click', showNextImage);

        // Xử lý sự kiện cho nút Prev
        prevBtn.addEventListener('click', showPrevImage);

        // Hàm bắt đầu slideshow tự động (mỗi 3 giây)
        function startSlideshow() {
            setInterval(showNextImage, 3000); // Chuyển ảnh mỗi 3 giây
        }

        // Bắt đầu slideshow khi trang được tải
        startSlideshow();
    }

    // Hàm lấy dữ liệu lịch trình tour
    function getLichTrinhTourData() {
        // Dữ liệu mẫu từ database (trong thực tế sẽ được lấy từ API hoặc backend)
        return {
            tourInfo: {
                maTour: "T001",
                tenTour: "Khám phá Đà Lạt",
                maCTTour: "CT001"
            },
            lichTrinh: [
                {
                    maLT: "LT001",
                    tenLT: "Ngày 1: TP.HCM - Đà Lạt",
                    ngay: 1,
                    maCTTour: "CT001",
                    hinhAnh: "hinh/a1.jpg",
                    moTaLT: "Khởi hành đến thành phố ngàn hoa",
                    hoatDongSang: "Đón khách tại điểm hẹn ở TP.HCM. Khởi hành đi Đà Lạt.",
                    hoatDongTrua: "Nghỉ ngơi và dùng bữa trưa tại nhà hàng trên đường đi.",
                    hoatDongChieu: "Đến Đà Lạt, tham quan Quảng trường Lâm Viên với biểu tượng hoa Atiso và hoa Dã Quỳ khổng lồ.",
                    hoatDongToi: "Dùng bữa tối tại nhà hàng. Tự do khám phá chợ đêm Đà Lạt. Nghỉ đêm tại khách sạn."
                },
                {
                    maLT: "LT002",
                    tenLT: "Ngày 2: Khám phá Đà Lạt",
                    ngay: 2,
                    maCTTour: "CT001",
                    hinhAnh: "hinh/a2.jpg",
                    moTaLT: "Tham quan các điểm du lịch nổi tiếng",
                    hoatDongSang: "Dùng điểm tâm sáng tại khách sạn. Tham quan vườn hoa thành phố với nhiều loài hoa đặc sắc.",
                    hoatDongTrua: "Dùng bữa trưa tại nhà hàng. Nghỉ ngơi.",
                    hoatDongChieu: "Tham quan Thiền Viện Trúc Lâm và Hồ Tuyền Lâm. Ngắm cảnh hoàng hôn trên đồi Robin.",
                    hoatDongToi: "Dùng bữa tối tại nhà hàng với đặc sản Đà Lạt. Tự do khám phá không gian cafe đêm. Nghỉ đêm tại khách sạn."
                },
                {
                    maLT: "LT003",
                    tenLT: "Ngày 3: Đà Lạt - TP.HCM",
                    ngay: 3,
                    maCTTour: "CT001",
                    hinhAnh: "hinh/a3.jpg",
                    moTaLT: "Kết thúc tour trở về TP.HCM",
                    hoatDongSang: "Dùng điểm tâm sáng tại khách sạn. Tham quan Làng Vườn Cẩm Tú Cầu và chụp hình lưu niệm.",
                    hoatDongTrua: "Dùng bữa trưa tại nhà hàng. Mua sắm đặc sản Đà Lạt về làm quà.",
                    hoatDongChieu: "Khởi hành về TP.HCM. Dừng chân nghỉ ngơi tại Bảo Lộc.",
                    hoatDongToi: "Về đến TP.HCM. Kết thúc chương trình tour."
                }
            ]
        };
    }

    // Hàm để hiển thị thông tin lịch trình trong card-1
    function displayTourSchedule() {
        const cardElement = document.querySelector('.card-1');
        if (!cardElement) return;

        // Lấy dữ liệu lịch trình
        const tourData = getLichTrinhTourData();
        const lichTrinh = tourData.lichTrinh;

        // Tạo HTML cho tiêu đề
        let htmlContent = `<h2>Lịch trình chi tiết</h2>`;

        // Tạo các button hiển thị ngày
        lichTrinh.forEach((ngay, index) => {
            const hiddenCardId = `hiddenCard${index + 1}`;
            
            htmlContent += `
                <button class="btn" data-target="${hiddenCardId}">
                    <img src="${ngay.hinhAnh}" alt="${ngay.tenLT}">
                    <div class="button-content">
                        <h3>${ngay.tenLT}</h3>
                        <p>${ngay.moTaLT}</p>
                    </div>
                </button>
                <div class="card-2" id="${hiddenCardId}">
                    <img src="${ngay.hinhAnh}" alt="${ngay.tenLT}">
                    <div class="schedule-details">
                        <h4>Chi tiết hoạt động:</h4>
                        <p><strong>Buổi sáng:</strong> ${ngay.hoatDongSang}</p>
                        <p><strong>Buổi trưa:</strong> ${ngay.hoatDongTrua}</p>
                        <p><strong>Buổi chiều:</strong> ${ngay.hoatDongChieu}</p>
                        ${ngay.hoatDongToi ? `<p><strong>Buổi tối:</strong> ${ngay.hoatDongToi}</p>` : ''}
                    </div>
                </div>
            `;
        });

        // Cập nhật nội dung
        cardElement.innerHTML = htmlContent;

        // Thêm lại sự kiện cho các button
        setupScheduleButtons();
        
        // Không tự động mở lịch trình nào mặc định
    }

    // Hàm thiết lập sự kiện cho các button lịch trình
    function setupScheduleButtons() {
        const buttons = document.querySelectorAll('.card-1 .btn');
        
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Lấy id của card cần hiển thị từ data-target của button
                const targetId = button.getAttribute('data-target');
                const targetCard = document.getElementById(targetId);
                
                // Toggle cho button hiện tại
                button.classList.toggle('clicked');
                
                // Toggle hiển thị card tương ứng
                targetCard.classList.toggle('show');
            });
        });
    }

    // Gọi hàm hiển thị lịch trình
    displayTourSchedule();

    // Hiển thị dịch vụ tour
    displayTourServices();

    // Khởi tạo chức năng tour-selection
    setupTourSelection();
    
    // Khởi tạo bảng lịch khởi hành và giá tour
    initTourScheduleTable();

    // Gọi hàm thiết lập tour card links
    setupTourCardLinks();
});

// Thêm sự kiện click vào các nút ngày (dates)
// ĐOẠN MÃ CŨ - ĐÃ ĐƯỢC THAY THẾ BẰNG HÀM setupTourSelection
// document.querySelectorAll('.date-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         // Loại bỏ lớp 'active' khỏi tất cả các button
//         document.querySelectorAll('.date-btn').forEach(btn => btn.classList.remove('active'));
//   
//         // Thêm lớp 'active' vào button được click
//         button.classList.add('active');
//         
//         // Cập nhật thông tin ngày đã chọn (nếu cần)
//         const selectedDate = button.textContent;
//         console.log("Ngày đã chọn:", selectedDate); // Có thể thay đổi để hiển thị trên UI nếu cần
//     });
// });

// Giá cơ bản cho mỗi người (sẽ được cập nhật động bởi hàm setupTourSelection)
window.pricePerAdult = 1000000;
window.pricePerChild = 800000; 
window.pricePerInfant = 500000;

// Các phần tử cần thao tác
const adultInput = document.getElementById('adults');
const childInput = document.getElementById('children');
const infantInput = document.getElementById('infants');
const totalPriceElement = document.getElementById('total-price');

// Hàm tính toán tổng giá tour
function calculateTotal() {
    if (!adultInput || !childInput || !infantInput || !totalPriceElement) return;
    
    const adults = parseInt(adultInput.value) || 0;
    const children = parseInt(childInput.value) || 0;
    const infants = parseInt(infantInput.value) || 0;

    // Tính toán tổng giá tour
    const total = (adults * window.pricePerAdult) + (children * window.pricePerChild) + (infants * window.pricePerInfant);

    // Cập nhật tổng giá vào giao diện
    totalPriceElement.innerText = total.toLocaleString() + " VND";
}

// Các nút cộng và trừ
document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling; // Lấy input tương ứng
        if (input) {
            input.value = parseInt(input.value) + 1; // Tăng giá trị
            calculateTotal(); // Tính toán lại tổng
        }
    });
});

document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.nextElementSibling; // Lấy input tương ứng
        if (input && parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1; // Giảm giá trị
            calculateTotal(); // Tính toán lại tổng
        }
    });
});

// Tính toán tổng khi trang được tải lên
calculateTotal();

// Hàm tính toán tổng khi trang được tải lên
calculateTotal();

// Khởi tạo dữ liệu cho bảng lịch khởi hành & giá tour
function initTourScheduleTable() {
    // Mô phỏng dữ liệu từ database
    const allDepartureDates = [
        { departureDate: "T5, 03/04/2025", returnDate: "CN, 06/04/2025", price: "9.990.000đ", availability: "Còn 8 chỗ" },
        { departureDate: "T5, 17/04/2025", returnDate: "CN, 20/04/2025", price: "10.990.000đ", availability: "Còn 12 chỗ" },
        { departureDate: "T5, 15/05/2025", returnDate: "CN, 18/05/2025", price: "10.990.000đ", availability: "Còn 5 chỗ" },
        { departureDate: "T5, 29/05/2025", returnDate: "CN, 01/06/2025", price: "10.990.000đ", availability: "Còn 15 chỗ" },
        { departureDate: "T5, 12/06/2025", returnDate: "CN, 15/06/2025", price: "11.490.000đ", availability: "Còn 10 chỗ" },
        // Dữ liệu bổ sung - ẩn mặc định
        { departureDate: "T5, 26/06/2025", returnDate: "CN, 29/06/2025", price: "11.990.000đ", availability: "Còn 20 chỗ" },
        { departureDate: "T5, 10/07/2025", returnDate: "CN, 13/07/2025", price: "12.490.000đ", availability: "Còn 18 chỗ" },
        { departureDate: "T5, 24/07/2025", returnDate: "CN, 27/07/2025", price: "12.490.000đ", availability: "Còn 7 chỗ" },
        { departureDate: "T5, 07/08/2025", returnDate: "CN, 10/08/2025", price: "12.990.000đ", availability: "Còn 15 chỗ" },
        { departureDate: "T5, 21/08/2025", returnDate: "CN, 24/08/2025", price: "12.990.000đ", availability: "Còn 22 chỗ" }
    ];

    // Hiển thị mặc định 5 ngày đầu tiên
    const visibleDates = 5;
    const scheduleTable = document.querySelector('.schedule-table tbody');
    if (!scheduleTable) return;
    
    // Xóa dữ liệu mẫu hiện có (nếu có)
    scheduleTable.innerHTML = '';
    
    // Hiển thị các ngày khởi hành đầu tiên
    for (let i = 0; i < visibleDates; i++) {
        if (i < allDepartureDates.length) {
            const date = allDepartureDates[i];
            addDateRow(scheduleTable, date, i);
        }
    }
    
    // Thiết lập sự kiện cho nút "Xem thêm"
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            // Kiểm tra xem đã hiển thị tất cả các ngày chưa
            const currentRows = scheduleTable.querySelectorAll('tr').length;
            
            if (currentRows < allDepartureDates.length) {
                // Hiển thị tất cả các ngày còn lại với hiệu ứng tuần tự
                animateRowsSequentially(scheduleTable, allDepartureDates, currentRows);
                
                // Đổi nút thành "Thu gọn"
                viewMoreBtn.innerHTML = 'Thu gọn <i class="fas fa-chevron-up"></i>';
            } else {
                // Thu gọn lại với hiệu ứng
                collapseRowsSequentially(scheduleTable, allDepartureDates, visibleDates);
                
                // Đổi lại nút thành "Xem thêm"
                viewMoreBtn.innerHTML = 'Xem thêm <i class="fas fa-chevron-down"></i>';
            }
        });
    }
}

// Hàm hiển thị các hàng tuần tự với hiệu ứng mượt mà
function animateRowsSequentially(tableBody, dateData, startIndex) {
    // Thời gian delay giữa mỗi hàng
    const delayBetweenRows = 120;
    
    // Thêm từng hàng với hiệu ứng trượt lăn
    for (let i = startIndex; i < dateData.length; i++) {
        setTimeout(() => {
            addDateRow(tableBody, dateData[i], i);
        }, (i - startIndex) * delayBetweenRows);
    }
}

// Hàm thu gọn bảng với hiệu ứng tuần tự
function collapseRowsSequentially(tableBody, dateData, visibleRows) {
    const rows = tableBody.querySelectorAll('tr');
    const delayBetweenRows = 80;
    
    // Ẩn các hàng từ dưới lên trên
    for (let i = rows.length - 1; i >= visibleRows; i--) {
        const row = rows[i];
        const delay = (rows.length - 1 - i) * delayBetweenRows;
        
        setTimeout(() => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(-10px)';
            
            // Xóa hàng sau khi animation hoàn tất
            setTimeout(() => {
                if (row.parentNode === tableBody) {
                    tableBody.removeChild(row);
                }
                
                // Nếu đây là hàng cuối cần xóa, hiển thị lại các hàng đầu tiên
                if (i === visibleRows) {
                    // Xóa tất cả hàng còn lại
                    tableBody.innerHTML = '';
                    
                    // Hiển thị lại các hàng đầu với hiệu ứng
                    for (let j = 0; j < visibleRows; j++) {
                        setTimeout(() => {
                            addDateRow(tableBody, dateData[j], j);
                        }, j * delayBetweenRows);
                    }
                    
                    // Cuộn lên đầu bảng
                    setTimeout(() => {
                        const scheduleSection = tableBody.closest('.tour-schedule-pricing');
                        if (scheduleSection) {
                            scheduleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, visibleRows * delayBetweenRows + 100);
                }
            }, 300); // Thời gian để animation fade-out hoàn tất
        }, delay);
    }
}

// Hàm thêm hàng mới vào bảng lịch khởi hành với animation
function addDateRow(tableBody, dateData, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${dateData.departureDate}</td>
        <td>${dateData.returnDate}</td>
        <td class="price">${dateData.price}</td>
        <td>${dateData.availability}</td>
        <td><a href="#" class="info-btn"><i class="fas fa-info-circle"></i></a></td>
    `;
    
    // Thêm hiệu ứng khi thêm hàng mới - chuyển động lăn nhẹ
    row.style.opacity = '0';
    row.style.transform = 'translateY(15px)';
    row.style.transition = 'opacity 400ms ease-out, transform 400ms ease-out';
    
    tableBody.appendChild(row);
    
    // Kích hoạt animation với delay nhỏ để đảm bảo DOM đã được cập nhật
    setTimeout(() => {
        row.style.opacity = '1';
        row.style.transform = 'translateY(0)';
    }, 10);
    
    // Thêm sự kiện cho nút thông tin
    const infoBtn = row.querySelector('.info-btn');
    infoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Thông tin chi tiết cho ngày ${dateData.departureDate}:\n\nTrạng thái: ${dateData.availability}\nGiá tour: ${dateData.price}\nThời gian: ${dateData.departureDate} - ${dateData.returnDate}`);
    });
}

// Hàm hiển thị dịch vụ tour độc lập hoàn toàn
function displayTourServices() {
    // Dữ liệu mô phỏng từ database - trong thực tế sẽ là API hoặc backend call
    const tourServices = {
        departure: "Hồ Chí Minh",
        tourCode: "TO2467",
        duration: {
            days: 4,
            nights: 3
        },
        inclusions: [
            "Vé máy bay",
            "Visa",
            "Khách sạn 3*",
            "Bữa ăn",
            "Xe tham quan",
            "Vé tham quan",
            "Hướng dẫn viên",
            "Bảo hiểm du lịch"
        ]
    };

    // Tạo phần tử mới cho dịch vụ tour
    const tourServicesCard = document.createElement('div');
    tourServicesCard.className = 'tour-services-card';

    // Tạo nội dung HTML với định dạng giống ảnh
    let htmlContent = `
        <h2>Tour Trọn Gói bao gồm</h2>
        <div class="tour-info-header">
            <div class="departure-info">
                <span class="label">Khởi hành từ: </span>
                <strong>${tourServices.departure}</strong>
                <span class="travel-icons">
                    <i class="fas fa-plane"></i>
                    <i class="fas fa-bus"></i>
                </span>
            </div>
            <div class="tour-code">
                <span class="label">Mã Tour: </span>
                <strong>${tourServices.tourCode}</strong>
            </div>
        </div>
    `;

    // Hiển thị danh sách dịch vụ trong 3 cột
    htmlContent += '<div class="services-grid">';
    
    tourServices.inclusions.forEach(item => {
        htmlContent += `
            <div class="service-item">
                <span class="check-icon">✓</span>
                <span class="service-text">${item}</span>
            </div>
        `;
    });
    
    htmlContent += '</div>';

    // Gán nội dung HTML vào phần tử mới
    tourServicesCard.innerHTML = htmlContent;

    // Thêm CSS cho component
    const style = document.createElement('style');
    style.textContent = `
        .tour-services-card {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
        
        .section-title {
            color: #333;
            margin-bottom: 18px;
            font-size: 1.25rem;
            font-weight: 600;
            padding-bottom: 8px;
            border-bottom: 2px solid #2196F3;
            display: inline-block;
            position: relative;
        }
        
        .section-title:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            border-bottom: 1px solid #e0e0e0;
            width: 300%;
        }
        
        .tour-info-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .departure-info, .tour-code {
            font-size: 15px;
        }
        
        .departure-info .label, .tour-code .label {
            color: #666;
            font-weight: 500;
        }
        
        .travel-icons {
            margin-left: 10px;
            color: #888;
        }
        
        .travel-icons i {
            margin-right: 5px;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
        }
        
        .service-item {
            display: flex;
            align-items: center;
        }
        
        .check-icon {
            color: #28a745;
            margin-right: 8px;
            font-weight: bold;
            font-size: 15px;
        }
        
        .service-text {
            font-size: 15px;
            color: #555;
        }
    `;
    document.head.appendChild(style);

    // Tìm vị trí để chèn component
    const tourGallery = document.querySelector('.tour-gallery');
    if (tourGallery) {
        // Chèn vào sau phần gallery
        const parentElement = tourGallery.parentNode;
        
        // Nếu có tour-package-card, chèn sau nó
        const tourPackageCard = document.querySelector('.tour-package-card');
        if (tourPackageCard) {
            parentElement.insertBefore(tourServicesCard, tourPackageCard.nextSibling);
        } else {
            // Nếu không có tour-package-card, chèn sau gallery
            parentElement.insertBefore(tourServicesCard, tourGallery.nextSibling);
        }
    } else {
        // Fallback: chèn vào đầu của col-md-8
        const colElement = document.querySelector('.col-md-8');
        if (colElement) {
            colElement.insertBefore(tourServicesCard, colElement.firstChild);
        }
    }
}

// Thêm đoạn mã để tự động cuộn về đầu trang khi tải lại
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// Hàm quản lý chức năng của tour-selection
function setupTourSelection() {
    // Dữ liệu cho các ngày khởi hành và giá tour (mô phỏng dữ liệu từ database)
    const tourDates = [
        { date: "20/03", day: "Thứ 4", adultPrice: 1000000, childPrice: 800000, infantPrice: 500000, available: 15 },
        { date: "03/04", day: "Thứ 5", adultPrice: 1200000, childPrice: 960000, infantPrice: 600000, available: 10 },
        { date: "17/04", day: "Thứ 6", adultPrice: 1100000, childPrice: 880000, infantPrice: 550000, available: 20 },
        { date: "25/04", day: "Thứ 7", adultPrice: 1300000, childPrice: 1040000, infantPrice: 650000, available: 5 },
        { date: "05/05", day: "Chủ nhật", adultPrice: 1250000, childPrice: 1000000, infantPrice: 625000, available: 12 },
        { date: "15/05", day: "Thứ 3", adultPrice: 1150000, childPrice: 920000, infantPrice: 575000, available: 8 }
    ];
    
    // Lấy các phần tử cần thiết
    const dateButtons = document.querySelectorAll('.date-btn');
    const priceAdult = document.getElementById('price-adult');
    const priceChild = document.getElementById('price-child');
    const priceInfant = document.getElementById('price-infant');
    const tourSelectionDiv = document.querySelector('.tour-selection');
    
    // Cập nhật giá tour dựa trên ngày được chọn
    function updatePrices(dateIndex) {
        if (dateIndex >= 0 && dateIndex < tourDates.length) {
            // Nếu chọn một ngày cụ thể
            if (priceAdult) priceAdult.textContent = tourDates[dateIndex].adultPrice.toLocaleString();
            if (priceChild) priceChild.textContent = tourDates[dateIndex].childPrice.toLocaleString();
            if (priceInfant) priceInfant.textContent = tourDates[dateIndex].infantPrice.toLocaleString();
            
            // Cập nhật biến giá toàn cục để tính toán tổng
            window.pricePerAdult = tourDates[dateIndex].adultPrice;
            window.pricePerChild = tourDates[dateIndex].childPrice;
            window.pricePerInfant = tourDates[dateIndex].infantPrice;
        } else {
            // Nếu chọn "Tất cả" - vẫn hiển thị giá mặc định (tour đầu tiên)
            if (priceAdult) priceAdult.textContent = tourDates[0].adultPrice.toLocaleString();
            if (priceChild) priceChild.textContent = tourDates[0].childPrice.toLocaleString();
            if (priceInfant) priceInfant.textContent = tourDates[0].infantPrice.toLocaleString();
            
            // Cập nhật biến giá toàn cục để tính toán tổng
            window.pricePerAdult = tourDates[0].adultPrice;
            window.pricePerChild = tourDates[0].childPrice;
            window.pricePerInfant = tourDates[0].infantPrice;
        }
        
        // Tính toán lại tổng sau khi cập nhật giá
        calculateTotal();
    }
    
    // Hiển thị bảng lịch đầy đủ với tất cả các ngày
    function showFullCalendar() {
        // Kiểm tra xem bảng lịch đã tồn tại chưa
        let calendarContainer = document.querySelector('.calendar-container');
        
        // Nếu đã tồn tại, chỉ cần hiển thị/ẩn
        if (calendarContainer) {
            if (calendarContainer.style.display === 'none') {
                calendarContainer.style.display = 'block';
            } else {
                calendarContainer.style.display = 'none';
                return; // Thoát khỏi hàm nếu chỉ là ẩn bảng lịch
            }
        } else {
            // Tạo container cho lịch
            calendarContainer = document.createElement('div');
            calendarContainer.className = 'calendar-container overlay-calendar';
            
            // Biến theo dõi tháng và năm hiện tại
            let currentMonth = 3; // Tháng 4 (0-based index là 3)
            let currentYear = 2025;
            
            // Xác định các ngày tour trong tháng này để đánh dấu
            // Mô phỏng dữ liệu từ database cho các tháng khác nhau
            const allTourDays = {
                '3-2025': [
                    { day: 3, price: '9.990k' },
                    { day: 17, price: '10.99tr' }
                ],
                '4-2025': [
                    { day: 5, price: '9.750k' },
                    { day: 19, price: '11.25tr' }
                ],
                '5-2025': [
                    { day: 7, price: '10.50tr' },
                    { day: 21, price: '12.35tr' }
                ],
                '2-2025': [
                    { day: 12, price: '8.890k' },
                    { day: 26, price: '9.75tr' }
                ]
            };
            
            // Hàm tạo header cho lịch
            function createCalendarHeader() {
                const calendarHeader = document.createElement('div');
                calendarHeader.className = 'calendar-header';
                
                const controlsContainer = document.createElement('div');
                controlsContainer.className = 'calendar-controls';
                
                // Tạo nút điều hướng trước
                const prevButton = document.createElement('button');
                prevButton.className = 'calendar-nav-btn prev';
                prevButton.innerHTML = '&lt;';
                
                // Tạo dropdowns
                const selectsContainer = document.createElement('div');
                selectsContainer.className = 'calendar-selects';
                
                // Dropdown tháng
                const monthSelect = document.createElement('select');
                monthSelect.className = 'month-select';
                monthSelect.id = 'month-select';
                
                const months = ['Th01', 'Th02', 'Th03', 'Th04', 'Th05', 'Th06', 'Th07', 'Th08', 'Th09', 'Th10', 'Th11', 'Th12'];
                
                months.forEach((month, index) => {
                    const option = document.createElement('option');
                    option.value = index;
                    option.textContent = month;
                    // Mặc định chọn tháng hiện tại
                    if (index === currentMonth) {
                        option.selected = true;
                    }
                    monthSelect.appendChild(option);
                });
                
                // Dropdown năm
                const yearSelect = document.createElement('select');
                yearSelect.className = 'year-select';
                yearSelect.id = 'year-select';
                
                const years = [2024, 2025, 2026];
                years.forEach(year => {
                    const option = document.createElement('option');
                    option.value = year;
                    option.textContent = year;
                    // Mặc định chọn năm hiện tại
                    if (year === currentYear) {
                        option.selected = true;
                    }
                    yearSelect.appendChild(option);
                });
                
                selectsContainer.appendChild(monthSelect);
                selectsContainer.appendChild(yearSelect);
                
                // Tạo nút điều hướng sau
                const nextButton = document.createElement('button');
                nextButton.className = 'calendar-nav-btn next';
                nextButton.innerHTML = '&gt;';
                
                // Thêm tất cả vào header
                controlsContainer.appendChild(prevButton);
                controlsContainer.appendChild(selectsContainer);
                controlsContainer.appendChild(nextButton);
                calendarHeader.appendChild(controlsContainer);
                
                return {
                    header: calendarHeader,
                    prevButton: prevButton,
                    nextButton: nextButton,
                    monthSelect: monthSelect,
                    yearSelect: yearSelect
                };
            }
            
            // Hàm tạo nội dung lịch
            function createCalendarContent(month, year) {
                // Tạo bảng lịch
                const calendarTable = document.createElement('table');
                calendarTable.className = 'month-calendar';
                
                // Tạo header cho các ngày trong tuần
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                
                const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
                
                weekdays.forEach(weekday => {
                    const th = document.createElement('th');
                    th.textContent = weekday;
                    // Đánh dấu T7 và CN màu đỏ
                    if (weekday === 'T7' || weekday === 'CN') {
                        th.style.color = '#ff0000';
                    }
                    headerRow.appendChild(th);
                });
                
                thead.appendChild(headerRow);
                calendarTable.appendChild(thead);
                
                // Tạo phần thân bảng lịch
                const tbody = document.createElement('tbody');
                
                // Xác định ngày đầu tiên và cuối cùng của tháng
                const firstDay = new Date(year, month, 1);
                const lastDay = new Date(year, month + 1, 0);
                
                // Điều chỉnh ngày đầu tuần bắt đầu từ thứ 2 (1) thay vì chủ nhật (0)
                let firstDayOfWeek = firstDay.getDay(); // 0 = Chủ nhật, 1 = Thứ 2, ...
                firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Chuyển 0 (CN) thành 6, và trừ 1 cho các ngày khác
                
                const totalDays = lastDay.getDate();
                
                // Lấy danh sách các ngày tour trong tháng này
                const monthKey = `${month}-${year}`;
                const tourDaysInMonth = allTourDays[monthKey] || [];
                
                let date = 1;
                const numRows = Math.ceil((totalDays + firstDayOfWeek) / 7);
                
                for (let i = 0; i < numRows; i++) {
                    const row = document.createElement('tr');
                    
                    for (let j = 0; j < 7; j++) {
                        const cell = document.createElement('td');
                        
                        if (i === 0 && j < firstDayOfWeek) {
                            // Ngày của tháng trước
                            const prevMonthLastDay = new Date(year, month, 0).getDate();
                            const prevMonthDay = prevMonthLastDay - (firstDayOfWeek - j - 1);
                            cell.textContent = prevMonthDay;
                            cell.className = 'prev-month';
                        } else if (date > totalDays) {
                            // Ngày của tháng sau
                            cell.textContent = date - totalDays;
                            cell.className = 'next-month';
                            date++;
                        } else {
                            // Ngày trong tháng hiện tại
                            cell.textContent = date;
                            
                            // Kiểm tra xem ngày này có phải là ngày tour không
                            const tourDay = tourDaysInMonth.find(td => td.day === date);
                            
                            if (tourDay) {
                                cell.className = 'tour-day';
                                
                                // Đánh dấu đặc biệt cho ngày 3 và 17 có background màu xanh
                                if ((date === 3 || date === 17) && month === 3) {
                                    cell.setAttribute('data-special', 'true');
                                }
                                
                                // Tạo div chứa giá
                                const priceDiv = document.createElement('div');
                                priceDiv.className = 'day-price';
                                priceDiv.textContent = tourDay.price;
                                cell.appendChild(priceDiv);
                                
                                // Thêm sự kiện click cho ngày tour
                                cell.addEventListener('click', function() {
                                    // Loại bỏ active class khỏi tất cả các ô
                                    document.querySelectorAll('.month-calendar td').forEach(td => {
                                        td.classList.remove('active');
                                    });
                                    
                                    // Thêm class active cho ô được chọn
                                    cell.classList.add('active');
                                    
                                    // Ẩn lịch sau một khoảng thời gian ngắn để người dùng thấy được hiệu ứng
                                    setTimeout(() => {
                                        calendarContainer.style.display = 'none';
                                        
                                        // Tìm ngày tour tương ứng trong mảng tourDates
                                        const formattedDate = `${date.toString().padStart(2, '0')}/${(month+1).toString().padStart(2, '0')}`;
                                        const tourIndex = tourDates.findIndex(tour => {
                                            return tour.date === formattedDate;
                                        });
                                        
                                        if (tourIndex !== -1) {
                                            // Cập nhật lựa chọn nếu nằm trong các nút đầu tiên
                                            if (tourIndex < dateButtons.length - 1) {
                                                dateButtons.forEach(btn => btn.classList.remove('active'));
                                                dateButtons[tourIndex].classList.add('active');
                                                updatePrices(tourIndex);
                                            }
                                        }
                                    }, 300);
                                });
                            } else {
                                cell.className = 'regular-day';
                            }
                            
                            date++;
                        }
                        
                        row.appendChild(cell);
                    }
                    
                    tbody.appendChild(row);
                }
                
                calendarTable.appendChild(tbody);
                return calendarTable;
            }
            
            // Hàm cập nhật nội dung lịch khi chuyển tháng
            function updateCalendar() {
                // Xóa bảng lịch cũ nếu có
                const oldTable = calendarContainer.querySelector('.month-calendar');
                if (oldTable) {
                    calendarContainer.removeChild(oldTable);
                }
                
                // Tạo bảng lịch mới với tháng và năm hiện tại
                const newTable = createCalendarContent(currentMonth, currentYear);
                
                // Thêm bảng mới vào container
                calendarContainer.appendChild(newTable);
            }
            
            // Tạo header cho lịch
            const headerElements = createCalendarHeader();
            calendarContainer.appendChild(headerElements.header);
            
            // Tạo nội dung lịch ban đầu
            const calendarTable = createCalendarContent(currentMonth, currentYear);
            calendarContainer.appendChild(calendarTable);
            
            // Tính vị trí cho lịch
            const dateButtons = document.querySelectorAll('.date-btn');
            const lastButton = dateButtons[dateButtons.length - 1];
            const buttonRect = lastButton.getBoundingClientRect();
            const tourSelectionDiv = document.querySelector('.tour-selection');
            
            // Thêm vào body thay vì tour-selection để có thể overlay đè lên bất cứ thứ gì
            document.body.appendChild(calendarContainer);
            
            // Đặt vị trí cho lịch
            const tourSelectionRect = tourSelectionDiv.getBoundingClientRect();
            calendarContainer.style.position = 'absolute';
            calendarContainer.style.top = (buttonRect.bottom + window.scrollY) + 'px';
            calendarContainer.style.left = tourSelectionRect.left + 'px';
            calendarContainer.style.width = tourSelectionRect.width + 'px';
            calendarContainer.style.zIndex = '10000';
            
            // Thêm sự kiện cho các nút điều hướng tháng
            headerElements.prevButton.addEventListener('click', function(e) {
                e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
                
                // Chuyển tháng trước
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11; // Tháng 12
                    currentYear--;
                }
                
                // Cập nhật hiển thị dropdown
                headerElements.monthSelect.value = currentMonth;
                headerElements.yearSelect.value = currentYear;
                
                // Cập nhật lịch
                updateCalendar();
            });
            
            headerElements.nextButton.addEventListener('click', function(e) {
                e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
                
                // Chuyển tháng sau
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0; // Tháng 1
                    currentYear++;
                }
                
                // Cập nhật hiển thị dropdown
                headerElements.monthSelect.value = currentMonth;
                headerElements.yearSelect.value = currentYear;
                
                // Cập nhật lịch
                updateCalendar();
            });
            
            // Thêm sự kiện cho dropdown
            headerElements.monthSelect.addEventListener('change', function(e) {
                e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
                currentMonth = parseInt(this.value);
                updateCalendar();
            });
            
            headerElements.yearSelect.addEventListener('change', function(e) {
                e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
                currentYear = parseInt(this.value);
                updateCalendar();
            });
            
            // Thêm sự kiện để đóng lịch khi nhấp vào bên ngoài
            document.addEventListener('click', function(e) {
                if (calendarContainer && !calendarContainer.contains(e.target) && 
                    e.target !== dateButtons[dateButtons.length - 1]) {
                    calendarContainer.style.display = 'none';
                }
            });
            
            // Ngăn sự kiện click trên lịch lan ra ngoài
            calendarContainer.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // Thêm sự kiện window resize để điều chỉnh vị trí
            window.addEventListener('resize', function() {
                if (calendarContainer.style.display !== 'none') {
                    const newButtonRect = lastButton.getBoundingClientRect();
                    const newTourSelectionRect = tourSelectionDiv.getBoundingClientRect();
                    
                    calendarContainer.style.top = (newButtonRect.bottom + window.scrollY) + 'px';
                    calendarContainer.style.left = newTourSelectionRect.left + 'px';
                    calendarContainer.style.width = newTourSelectionRect.width + 'px';
                }
            });

            // Thêm sự kiện scroll để lịch di chuyển theo khi cuộn trang
            window.addEventListener('scroll', function() {
                if (calendarContainer.style.display !== 'none') {
                    const newButtonRect = lastButton.getBoundingClientRect();
                    calendarContainer.style.top = (newButtonRect.bottom + window.scrollY) + 'px';
                }
            });
        }
    }
    
    // Thêm sự kiện click cho các nút chọn ngày
    dateButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Loại bỏ lớp 'active' khỏi tất cả các button
            dateButtons.forEach(btn => btn.classList.remove('active'));
            
            // Thêm lớp 'active' vào button được click
            button.classList.add('active');
            
            // Nếu là nút "Tất cả" (nút cuối cùng)
            if (index === dateButtons.length - 1) {
                showFullCalendar();
            } else {
                // Ẩn bảng lịch nếu đang hiển thị
                const calendarContainer = document.querySelector('.calendar-container');
                if (calendarContainer) {
                    calendarContainer.style.display = 'none';
                }
                
                // Cập nhật giá dựa trên ngày đã chọn
                updatePrices(index);
            }
        });
    });
    
    // Cập nhật nút đặt tour
    const submitButton = document.querySelector('.btn-submit');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            // Lấy thông tin đã chọn
            const selectedDate = document.querySelector('.date-btn.active').textContent;
            const adults = parseInt(document.getElementById('adults').value) || 0;
            const children = parseInt(document.getElementById('children').value) || 0; 
            const infants = parseInt(document.getElementById('infants').value) || 0;
            const totalPrice = document.getElementById('total-price').textContent;
            
            // Hiển thị thông báo hoặc chuyển hướng đến trang đặt tour
            alert(`Thông tin đặt tour:
                Ngày khởi hành: ${selectedDate}
                Số người lớn: ${adults}
                Số trẻ em: ${children}
                Số trẻ nhỏ: ${infants}
                Tổng giá: ${totalPrice}`);
                
            // Trong thực tế, bạn có thể gửi dữ liệu này đến máy chủ
            // hoặc chuyển hướng đến trang thanh toán
        });
    }
    
    // Khởi tạo giá ban đầu (mặc định là ngày đầu tiên)
    updatePrices(0);
}

// Thêm hàm để khởi tạo tour cards có thể click
function setupTourCardLinks() {
    // Dữ liệu tour liên quan (mô phỏng từ database)
    const relatedTours = [
        {
            id: "TL001",
            title: "Tour Đài Loan 5N4Đ: Hà Nội - Cao Hùng - Đài Trung - Đài Bắc - Du Thuyền Hồ Nhật Nguyệt",
            duration: "5 Ngày 4 Đêm",
            locations: ["Phố Cổ Thập Phần", "Du Thuyền Hồ Nhật Nguyệt", "Công Viên Dương Minh Sơn"],
            price: "12.490.000 VND",
            image: "hinh/a1.jpg"
        },
        {
            id: "TL002",
            title: "Tour Đài Loan 5N4Đ: Hà Nội - Cao Hùng - Đài Trung - Đài Bắc - Du Thuyền Hồ Nhật Nguyệt",
            duration: "5 Ngày 4 Đêm",
            locations: ["Phố Cổ Thập Phần", "Du Thuyền Hồ Nhật Nguyệt", "Công Viên Dương Minh Sơn"],
            price: "12.490.000 VND",
            image: "hinh/a1.jpg"
        },
        {
            id: "TL003",
            title: "Tour Đài Loan 5N4Đ: Hà Nội - Cao Hùng - Đài Trung - Đài Bắc - Du Thuyền Hồ Nhật Nguyệt",
            duration: "5 Ngày 4 Đêm",
            locations: ["Phố Cổ Thập Phần", "Du Thuyền Hồ Nhật Nguyệt", "Công Viên Dương Minh Sơn"],
            price: "12.490.000 VND",
            image: "hinh/a1.jpg"
        }
    ];

    // Lấy các phần tử tour card
    const tourCards = document.querySelectorAll('.container-2 .tour-card');
    
    // Xử lý từng tour card
    tourCards.forEach((card, index) => {
        if (index < relatedTours.length) {
            const tour = relatedTours[index];
            
            // Tạo wrapper link bọc toàn bộ card
            const cardWrapper = document.createElement('a');
            cardWrapper.href = `tour-details.html?id=${tour.id}`;
            cardWrapper.title = `Xem chi tiết: ${tour.title}`;
            cardWrapper.className = 'tour-card-link';
            
            // Chuyển nội dung của card vào wrapper
            cardWrapper.innerHTML = card.innerHTML;
            
            // Xóa nội dung cũ và thêm wrapper mới
            card.innerHTML = '';
            card.appendChild(cardWrapper);
            
            // Thêm hiệu ứng hover
            card.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        }
    });
    
    // Thêm style vào head để hỗ trợ hiệu ứng hover
    const style = document.createElement('style');
    style.textContent = `
        .tour-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }
        
        .tour-card.hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .tour-card-link {
            display: block;
            color: inherit;
            text-decoration: none;
        }
        
        .tour-card-link:hover {
            text-decoration: none;
            color: inherit;
        }
    `;
    document.head.appendChild(style);
}