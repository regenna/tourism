// Biến toàn cục để lưu trữ thông tin người dùng hiện tại
let currentUser = {
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0987654321",
    address: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh",
    birthdate: "1990-01-01",
    gender: "Nam",
    profileImage: "hinh/a1.jpg"
};

// Dữ liệu mẫu cho đơn hàng tour
const tourOrders = [
    {
        id: "T001",
        name: "Du lịch Đà Lạt",
        startDate: "2024-04-15",
        endDate: "2024-04-20",
        price: "3,500,000 VND",
        status: "upcoming", // upcoming, completed, canceled
        image: "hinh/a2.jpg"
    },
    {
        id: "T002",
        name: "Du lịch Phú Quốc",
        startDate: "2024-05-10",
        endDate: "2024-05-15",
        price: "5,000,000 VND",
        status: "upcoming",
        image: "hinh/a3.jpg"
    },
    {
        id: "T003",
        name: "Du lịch Đà Nẵng - Hội An",
        startDate: "2023-12-20",
        endDate: "2023-12-25",
        price: "4,200,000 VND",
        status: "completed",
        image: "hinh/a4.jpg"
    },
    {
        id: "T004",
        name: "Du lịch Hạ Long",
        startDate: "2024-01-05",
        endDate: "2024-01-08",
        price: "3,800,000 VND",
        status: "completed",
        image: "hinh/a5.jpg"
    },
    {
        id: "T005",
        name: "Du lịch Nha Trang",
        startDate: "2024-03-10",
        endDate: "2024-03-15",
        price: "4,500,000 VND",
        status: "canceled",
        image: "hinh/a1.jpg"
    }
];

// Thiết lập tab active
function setActiveTab(element) {
    // Xóa class active từ tất cả các tab
    document.querySelectorAll('.col-left .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Thêm class active cho tab được chọn
    element.classList.add('active');
}

// Hiển thị nội dung dựa vào tab được chọn
function showContent(tabId) {
    const dynamicContent = document.getElementById('dynamic-content');
    
    switch(tabId) {
        case 1:
            // Hiển thị trang hồ sơ cá nhân
            dynamicContent.innerHTML = renderProfilePage();
            break;
        case 2:
            // Hiển thị trang đơn hàng
            dynamicContent.innerHTML = renderOrdersPage();
            break;
        default:
            dynamicContent.innerHTML = '<div class="alert alert-info">Vui lòng chọn một mục.</div>';
    }
}

// Render trang hồ sơ cá nhân
function renderProfilePage() {
    return `
        <div class="card shadow-sm">
            <div class="card-header bg-white d-flex justify-content-between align-items-center">
                <h4 class="mb-0">Hồ Sơ Cá Nhân</h4>
                <button class="btn btn-primary" onclick="toggleEditMode()">
                    <i class="fas fa-edit me-2"></i>Chỉnh sửa
                </button>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 text-center mb-4">
                        <div class="position-relative mx-auto" style="width: 150px; height: 150px;">
                            <img src="${currentUser.profileImage}" alt="Ảnh đại diện" class="rounded-circle img-thumbnail" style="width: 150px; height: 150px; object-fit: cover;">
                            <div id="editImageOverlay" class="position-absolute top-0 start-0 w-100 h-100 d-none justify-content-center align-items-center rounded-circle" style="background-color: rgba(0,0,0,0.5);">
                                <label for="profileImageInput" class="btn btn-sm btn-light rounded-circle" style="cursor: pointer;">
                                    <i class="fas fa-camera"></i>
                                </label>
                                <input type="file" id="profileImageInput" class="d-none" accept="image/*" onchange="updateProfileImage(event)">
                            </div>
                        </div>
                        <h5 class="mt-3">${currentUser.fullName}</h5>
                    </div>
                    <div class="col-md-8">
                        <form id="profileForm">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="form-label">Họ và tên</label>
                                    <input type="text" class="form-control" id="fullName" value="${currentUser.fullName}" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" value="${currentUser.email}" disabled>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="form-label">Số điện thoại</label>
                                    <input type="tel" class="form-control" id="phone" value="${currentUser.phone}" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Ngày sinh</label>
                                    <input type="date" class="form-control" id="birthdate" value="${currentUser.birthdate}" disabled>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label class="form-label">Giới tính</label>
                                    <select class="form-select" id="gender" disabled>
                                        <option value="Nam" ${currentUser.gender === 'Nam' ? 'selected' : ''}>Nam</option>
                                        <option value="Nữ" ${currentUser.gender === 'Nữ' ? 'selected' : ''}>Nữ</option>
                                        <option value="Khác" ${currentUser.gender === 'Khác' ? 'selected' : ''}>Khác</option>
                                    </select>
                                </div>
                                <div class="col-md-6 d-flex align-items-end">
                                    <div id="saveButtons" class="d-none">
                                        <button type="button" class="btn btn-success me-2" onclick="saveProfile()">
                                            <i class="fas fa-save me-2"></i>Lưu thay đổi
                                        </button>
                                        <button type="button" class="btn btn-secondary" onclick="cancelEdit()">
                                            <i class="fas fa-times me-2"></i>Hủy
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Địa chỉ</label>
                                <textarea class="form-control" id="address" rows="2" disabled>${currentUser.address}</textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Chuyển đổi chế độ chỉnh sửa thông tin cá nhân
function toggleEditMode() {
    const profileForm = document.getElementById('profileForm');
    const inputs = profileForm.querySelectorAll('input, select, textarea');
    const saveButtons = document.getElementById('saveButtons');
    const editImageOverlay = document.getElementById('editImageOverlay');
    
    inputs.forEach(input => {
        input.disabled = !input.disabled;
    });
    
    if (saveButtons.classList.contains('d-none')) {
        saveButtons.classList.remove('d-none');
        editImageOverlay.classList.remove('d-none');
        editImageOverlay.classList.add('d-flex');
    } else {
        saveButtons.classList.add('d-none');
        editImageOverlay.classList.add('d-none');
        editImageOverlay.classList.remove('d-flex');
    }
}

// Lưu thông tin hồ sơ cá nhân
function saveProfile() {
    currentUser.fullName = document.getElementById('fullName').value;
    currentUser.email = document.getElementById('email').value;
    currentUser.phone = document.getElementById('phone').value;
    currentUser.birthdate = document.getElementById('birthdate').value;
    currentUser.gender = document.getElementById('gender').value;
    currentUser.address = document.getElementById('address').value;
    
    // Hiển thị thông báo lưu thành công
    showToast('Thông tin cá nhân đã được cập nhật!', 'success');
    
    // Chuyển về chế độ xem
    toggleEditMode();
    
    // Cập nhật lại giao diện
    showContent(1);
}

// Hủy chế độ chỉnh sửa
function cancelEdit() {
    toggleEditMode();
    // Khôi phục dữ liệu ban đầu
    document.getElementById('fullName').value = currentUser.fullName;
    document.getElementById('email').value = currentUser.email;
    document.getElementById('phone').value = currentUser.phone;
    document.getElementById('birthdate').value = currentUser.birthdate;
    document.getElementById('gender').value = currentUser.gender;
    document.getElementById('address').value = currentUser.address;
}

// Cập nhật ảnh đại diện
function updateProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentUser.profileImage = e.target.result;
            document.querySelector('.rounded-circle').src = e.target.result;
            showToast('Ảnh đại diện đã được cập nhật!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

// Render trang đơn hàng tour
function renderOrdersPage() {
    return `
        <div class="card shadow-sm">
            <div class="card-header bg-white">
                <h4 class="mb-0">Đơn Hàng Tour</h4>
            </div>
            <div class="card-body">
                <ul class="nav nav-pills mb-4" id="tourTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="upcoming-tab" data-bs-toggle="pill" data-bs-target="#upcoming" type="button" role="tab">
                            <i class="fas fa-hourglass-start me-2"></i>Tour sắp đi
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="completed-tab" data-bs-toggle="pill" data-bs-target="#completed" type="button" role="tab">
                            <i class="fas fa-check-circle me-2"></i>Tour đã đi
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="canceled-tab" data-bs-toggle="pill" data-bs-target="#canceled" type="button" role="tab">
                            <i class="fas fa-times-circle me-2"></i>Tour đã hủy
                        </button>
                    </li>
                </ul>
                
                <div class="tab-content" id="tourTabsContent">
                    <div class="tab-pane fade show active" id="upcoming" role="tabpanel">
                        ${renderTourCards(tourOrders.filter(tour => tour.status === 'upcoming'))}
                    </div>
                    <div class="tab-pane fade" id="completed" role="tabpanel">
                        ${renderTourCards(tourOrders.filter(tour => tour.status === 'completed'))}
                    </div>
                    <div class="tab-pane fade" id="canceled" role="tabpanel">
                        ${renderTourCards(tourOrders.filter(tour => tour.status === 'canceled'))}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render danh sách tour theo trạng thái
function renderTourCards(tours) {
    if (tours.length === 0) {
        return `<div class="alert alert-info">Không có tour nào.</div>`;
    }
    
    let cardsHtml = '<div class="row">';
    
    tours.forEach(tour => {
        cardsHtml += `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${tour.image}" class="card-img-top" alt="${tour.name}" style="height: 180px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${tour.name}</h5>
                        <div class="mb-2">
                            <i class="fas fa-calendar-alt me-2 text-primary"></i>
                            <span>${formatDate(tour.startDate)} - ${formatDate(tour.endDate)}</span>
                        </div>
                        <div class="mb-2">
                            <i class="fas fa-tag me-2 text-primary"></i>
                            <span>Giá: ${tour.price}</span>
                        </div>
                        ${renderStatusBadge(tour.status)}
                    </div>
                    <div class="card-footer bg-white">
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary" onclick="viewTourDetails('${tour.id}')">
                                <i class="fas fa-info-circle me-2"></i>Chi tiết
                            </button>
                            ${tour.status === 'upcoming' ? `
                                <button class="btn btn-outline-danger" onclick="cancelTour('${tour.id}')">
                                    <i class="fas fa-times me-2"></i>Hủy tour
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    cardsHtml += '</div>';
    return cardsHtml;
}

// Hiển thị trạng thái tour
function renderStatusBadge(status) {
    switch(status) {
        case 'upcoming':
            return '<span class="badge bg-warning text-dark"><i class="fas fa-hourglass-start me-1"></i>Sắp đi</span>';
        case 'completed':
            return '<span class="badge bg-success"><i class="fas fa-check-circle me-1"></i>Đã hoàn thành</span>';
        case 'canceled':
            return '<span class="badge bg-danger"><i class="fas fa-times-circle me-1"></i>Đã hủy</span>';
        default:
            return '';
    }
}

// Định dạng ngày tháng
function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
}

// Xem chi tiết tour
function viewTourDetails(tourId) {
    const tour = tourOrders.find(t => t.id === tourId);
    if (tour) {
        // Hiển thị modal chi tiết tour (có thể thêm sau)
        alert(`Xem chi tiết tour: ${tour.name}`);
    }
}

// Hủy tour
function cancelTour(tourId) {
    if (confirm('Bạn có chắc chắn muốn hủy tour này không?')) {
        const tourIndex = tourOrders.findIndex(t => t.id === tourId);
        if (tourIndex !== -1) {
            tourOrders[tourIndex].status = 'canceled';
            showContent(2); // Làm mới trang đơn hàng
            showToast('Tour đã được hủy thành công!', 'success');
        }
    }
}

// Hiển thị thông báo toast
function showToast(message, type = 'info') {
    const bgColor = type === 'success' ? '#28a745' : 
                   type === 'error' ? '#dc3545' : 
                   type === 'warning' ? '#ffc107' : '#17a2b8';
    
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: bgColor,
        stopOnFocus: true
    }).showToast();
}

// Chạy khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị tab Hồ sơ cá nhân khi trang được tải
    document.querySelector('.col-left .btn').classList.add('active');
    showContent(1);
});
