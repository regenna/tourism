// Set first tab as active when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Find the first tab and set it as active
    const firstTabItem = document.querySelector('.col-left .tab-item');
    const firstButton = firstTabItem.querySelector('.btn');
    
    if (firstTabItem && firstButton) {
        firstButton.classList.add('active');
    }
    
    // Show content for button 1 by default
    showContent(1);
});             

// Function to set active tab
function setActiveTab(button) {
    // Remove active class from all buttons
    document.querySelectorAll('.col-left .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to the clicked button
    button.classList.add('active');
}

// Common action buttons HTML to reuse across all tables
const actionButtonsHTML = `
<div class="d-flex justify-content-center">
    <button class="btn btn-sm btn-outline-primary me-2" style="width: 38px; height: 38px; border-radius: 5px;"><i class="fas fa-eye"></i></button>
    <button class="btn btn-sm btn-outline-warning me-2" style="width: 38px; height: 38px; border-radius: 5px;"><i class="fas fa-edit"></i></button>
    <button class="btn btn-sm btn-outline-danger" style="width: 38px; height: 38px; border-radius: 5px;"><i class="fas fa-trash"></i></button>
</div>
`;

function showContent(buttonName) {
    const dynamicContent = document.getElementById('dynamic-content');
    let content = '';

    if (buttonName === 1) {
        content = `
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="m-0">Danh sách Tour</h5>
                        <div class="search-box">
                            <input type="text" class="form-control" placeholder="Tìm kiếm tour...">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Tên Tour</th>
                                    <th>Số ngày</th>
                                    <th>Số đêm</th>
                                    <th>Giá</th>
                                    <th>Loại Tour</th>
                                    <th>Trạng thái</th>
                                    <th class="text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khám phá Đà Lạt</td>
                                    <td>3</td>
                                    <td>2</td>
                                    <td>3,500,000 đ</td>
                                    <td>Tour núi rừng</td>
                                    <td><span class="badge bg-success">Đang mở bán</span></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Vịnh Hạ Long - Quảng Ninh</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>4,800,000 đ</td>
                                    <td>Tour biển đảo</td>
                                    <td><span class="badge bg-warning text-dark">Sắp đủ</span></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Phú Quốc - Thiên đường biển đảo</td>
                                    <td>5</td>
                                    <td>4</td>
                                    <td>5,300,000 đ</td>
                                    <td>Tour biển đảo</td>
                                    <td><span class="badge bg-danger">Đã hết chỗ</span></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Đà Nẵng - Hội An - Huế</td>
                                    <td>6</td>
                                    <td>5</td>
                                    <td>6,200,000 đ</td>
                                    <td>Tour văn hóa</td>
                                    <td><span class="badge bg-info text-dark">Mới mở</span></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Sapa - Fansipan</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>3,800,000 đ</td>
                                    <td>Tour núi rừng</td>
                                    <td><span class="badge bg-secondary">Chờ duyệt</span></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="button" onclick="showAddForm(1)">
                <div class="button__text">Thêm</div>
                <div class="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                </div>
            </div>
        `;
    } else if (buttonName === 2) {
        content = `
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="m-0">Danh sách Phương Tiện</h5>
                        <div class="search-box">
                            <input type="text" class="form-control" placeholder="Tìm kiếm phương tiện...">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Tên phương tiện</th>
                                    <th>Số lượng chỗ</th>
                                    <th class="text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Xe khách Thaco Universe</td>
                                    <td>45 chỗ</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Ford Transit Limousine</td>
                                    <td>12 chỗ</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Máy bay Airbus A320</td>
                                    <td>180 hành khách</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tàu Paradise Luxury Cruise</td>
                                    <td>80 hành khách</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Xe buýt Hyundai County</td>
                                    <td>29 chỗ</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tàu hỏa SE3 - Tàu nhanh Sài Gòn</td>
                                    <td>400 hành khách</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="button" onclick="showAddForm(2)">
                <div class="button__text">Thêm</div>
                <div class="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                </div>
            </div>
        `;
    } else if (buttonName === 3) {
        content = `
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="m-0">Danh sách Loại Tour</h5>
                        <div class="search-box">
                            <input type="text" class="form-control" placeholder="Tìm kiếm loại tour...">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th style="width: 70%">Tên loại tour</th>
                                    <th style="width: 30%; text-align: center;">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tour biển đảo</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tour núi rừng</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tour văn hóa</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tour ẩm thực</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tour mạo hiểm</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Tour nghỉ dưỡng</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="button" onclick="showAddForm(3)">
                <div class="button__text">Thêm</div>
                <div class="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                </div>
            </div>
        `;
    } else if (buttonName === 4) {
        content = `
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="m-0">Danh sách Điểm Khởi Hành</h5>
                        <div class="search-box">
                            <input type="text" class="form-control" placeholder="Tìm kiếm điểm khởi hành...">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Tên điểm khởi hành</th>
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th class="text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hà Nội</td>
                                    <td>Bến xe Mỹ Đình, Nam Từ Liêm, Hà Nội</td>
                                    <td>0243123456</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>TP. Hồ Chí Minh</td>
                                    <td>Bến xe Miền Đông mới, Quận 9, TP.HCM</td>
                                    <td>0283123456</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Đà Nẵng</td>
                                    <td>Bến xe trung tâm Đà Nẵng, Tôn Đức Thắng</td>
                                    <td>0236123456</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Nha Trang</td>
                                    <td>23 Hoàng Văn Thụ, Nha Trang, Khánh Hòa</td>
                                    <td>0258123456</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Cần Thơ</td>
                                    <td>Bến xe Cần Thơ, Hưng Lợi, Ninh Kiều</td>
                                    <td>0292123456</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Đà Lạt</td>
                                    <td>01 Tô Hiến Thành, P.3, Đà Lạt, Lâm Đồng</td>
                                    <td>0263123456</td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="button" onclick="showAddForm(4)">
                <div class="button__text">Thêm</div>
                <div class="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                </div>
            </div>
        `;
    } else if (buttonName === 5) {
        content = `
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="m-0">Danh sách Điểm Đến</h5>
                        <div class="search-box">
                            <input type="text" class="form-control" placeholder="Tìm kiếm điểm đến...">
                            <i class="fas fa-search search-icon"></i>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Tên điểm đến</th>
                                    <th>Mô tả</th>
                                    <th>Hình ảnh</th>
                                    <th class="text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vịnh Hạ Long</td>
                                    <td>Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi</td>
                                    <td><img src="hinh/halong.jpg" width="50" height="50" alt="Vịnh Hạ Long" class="img-thumbnail"></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Phố cổ Hội An</td>
                                    <td>Di sản văn hóa thế giới với kiến trúc cổ đặc sắc</td>
                                    <td><img src="hinh/hoian.jpg" width="50" height="50" alt="Phố cổ Hội An" class="img-thumbnail"></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Đảo Phú Quốc</td>
                                    <td>Hòn đảo ngọc với bãi biển cát trắng tuyệt đẹp</td>
                                    <td><img src="hinh/phuquoc.jpg" width="50" height="50" alt="Đảo Phú Quốc" class="img-thumbnail"></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Núi Fansipan</td>
                                    <td>Nóc nhà Đông Dương với cảnh quan hùng vĩ</td>
                                    <td><img src="hinh/fansipan.jpg" width="50" height="50" alt="Núi Fansipan" class="img-thumbnail"></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Bà Nà Hills</td>
                                    <td>Khu du lịch với Cầu Vàng nổi tiếng thế giới</td>
                                    <td><img src="hinh/bana.jpg" width="50" height="50" alt="Bà Nà Hills" class="img-thumbnail"></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                                <tr>
                                    <td>Thành phố Đà Lạt</td>
                                    <td>Thành phố ngàn hoa với khí hậu mát mẻ quanh năm</td>
                                    <td><img src="hinh/dalat.jpg" width="50" height="50" alt="Thành phố Đà Lạt" class="img-thumbnail"></td>
                                    <td>${actionButtonsHTML}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="button" onclick="showAddForm(5)">
                <div class="button__text">Thêm</div>
                <div class="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                    </svg>
                </div>
            </div>
        `;
    }
    
    dynamicContent.innerHTML = content;

    // Add event listeners after content is rendered
    setTimeout(() => {
        // View button event listeners
        document.querySelectorAll('.btn-outline-primary').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.closest('tr');
                const cells = row.cells;
                const tableHeaders = Array.from(row.closest('table').querySelectorAll('th')).map(th => th.textContent);
                
                if (tableHeaders.includes('Tên Tour')) {
                    // Extract data from the table row for tours
                    const tourName = cells[0].textContent;
                    const numDays = cells[1].textContent;
                    const numNights = cells[2].textContent;
                    const price = cells[3].textContent;
                    const tourType = cells[4].textContent;
                    const status = row.querySelector('.badge') ? row.querySelector('.badge').textContent : 'Đang mở bán';
                    
                    showTourDetails(tourName, tourName, '01/06/2023', '03/06/2023', price, status, numDays, numNights);
                } else if (tableHeaders.includes('Tên phương tiện')) {
                    // Extract data from the table row for vehicles
                    const vehicleName = cells[0].textContent;
                    const capacity = cells[1].textContent;
                    
                    showVehicleDetails(vehicleName, capacity);
                } else if (tableHeaders.includes('Tên loại tour')) {
                    // Extract data from the table row for tour types
                    const tourTypeName = cells[0].textContent;
                    
                    showTourTypeDetails(tourTypeName);
                } else if (tableHeaders.includes('Tên điểm khởi hành')) {
                    // Extract data from the table row for departure points
                    const departureName = cells[0].textContent;
                    const address = cells[1].textContent;
                    const phone = cells[2].textContent;
                    
                    showDeparturePointDetails(departureName, address, phone);
                } else if (tableHeaders.includes('Tên điểm đến')) {
                    // Extract data from the table row for destinations
                    const destinationName = cells[0].textContent;
                    const description = cells[1].textContent;
                    const imgElement = cells[2].querySelector('img');
                    const imagePath = imgElement ? imgElement.src : '';
                    
                    showDestinationDetails(destinationName, description, imagePath);
                }
                // Add more conditions for other entity types as needed
            });
        });
        
        // Edit button event listeners
        document.querySelectorAll('.btn-outline-warning').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.closest('tr');
                // Determine what type of data this is based on the table structure
                const tableHeaders = Array.from(row.closest('table').querySelectorAll('th')).map(th => th.textContent);
                
                let buttonType = 0;
                if (tableHeaders.includes('Tên Tour')) buttonType = 1;
                else if (tableHeaders.includes('Tên phương tiện')) buttonType = 2;
                else if (tableHeaders.includes('Tên loại tour')) buttonType = 3;
                else if (tableHeaders.includes('Tên điểm khởi hành')) buttonType = 4;
                else if (tableHeaders.includes('Tên điểm đến')) buttonType = 5;
                
                showEditForm(buttonType, row);
            });
        });
        
        // Delete button event listeners
        document.querySelectorAll('.btn-outline-danger').forEach(button => {
            button.addEventListener('click', function() {
                const row = this.closest('tr');
                const name = row.cells[0].textContent;
                const tableHeaders = Array.from(row.closest('table').querySelectorAll('th')).map(th => th.textContent);
                
                let entityType = 'item';
                if (tableHeaders.includes('Tên Tour')) entityType = 'tour';
                else if (tableHeaders.includes('Tên phương tiện')) entityType = 'phương tiện';
                else if (tableHeaders.includes('Tên loại tour')) entityType = 'loại tour';
                else if (tableHeaders.includes('Tên điểm khởi hành')) entityType = 'điểm khởi hành';
                else if (tableHeaders.includes('Tên điểm đến')) entityType = 'điểm đến';
                
                if (confirm(`Bạn có chắc chắn muốn xóa ${entityType} "${name}" không?`)) {
                    // In a real app, you would send a request to delete this item
                    // For demo, we'll just remove the row
                    row.remove();
                    alert(`Đã xóa ${entityType} thành công!`);
                }
            });
        });
        // Add New Tour button event listener
        const addButton = document.querySelector('.button');
        if (addButton) {
            addButton.addEventListener('click', showAddTourForm);
        }
    }, 100);
}

// Function to show tour details in a modal
function showTourDetails(name, location, startDate, endDate, price, status, days, nights) {
    // Create modal element based strictly on database fields
    const modalHTML = `
    <div class="modal fade" id="tourDetailModal" tabindex="-1" aria-labelledby="tourDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tourDetailModalLabel">Chi tiết tour</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
                    <div class="row mb-4">
                        <div class="col-md-5">
                            <img src="hinh/tour-placeholder.jpg" class="img-fluid rounded mb-3" alt="Tour image" onerror="this.src='https://via.placeholder.com/400x300?text=Hình+ảnh+tour'">
                        </div>
                        <div class="col-md-7">
                            <h4 class="mb-3">${name}</h4>
                            <div class="mb-2">
                                <strong>Thời gian:</strong>
                                <span>${days} ngày ${nights} đêm</span>
                            </div>
                            <div class="mb-2">
                                <strong>Giá tour:</strong>
                                <span class="text-danger">${price}</span>
                        </div>
                            <div class="mb-2">
                                <strong>Trạng thái:</strong>
                                <span class="badge bg-${getBadgeColor(status)}">${status}</span>
                    </div>
                            <div class="mb-2">
                                <strong>Loại tour:</strong>
                                <span>${getLabelFromTable('loaiTour', name)}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-3">
                                <div class="card-header text-white" style="background-color: #637c94;">
                                    <h5 class="m-0">Mô tả tour</h5>
                                </div>
                                <div class="card-body">
                                    <p>Thông tin dịch vụ: ${getDichVuTour(name)}</p>
                                    <p>Ghi chú: ${getGhiChu(name)}</p>
                                </div>
                            </div>
                            
                            <div class="card mb-3">
                                <div class="card-header text-white" style="background-color: #637c94;">
                                    <h5 class="m-0">Lịch trình</h5>
                                </div>
                                <div class="card-body">
                            <div class="accordion" id="accordionSchedule">
                                        ${getLichTrinhHTML(name, days)}
                                        </div>
                                    </div>
                                </div>

                            <div class="card">
                                <div class="card-header text-white" style="background-color: #637c94;">
                                    <h5 class="m-0">Dịch vụ bao gồm</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            ${getDichVuTourDetails(name)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" id="editTourBtn" class="btn btn-primary">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Create style element with custom scrollbar styling
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Custom scrollbar styling for the main modal body only */
        .modal-body::-webkit-scrollbar {
            width: 8px;
        }
        
        .modal-body::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        
        .modal-body::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        
        .modal-body::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        
        /* Firefox scrollbar */
        .modal-body {
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
        }
        
        /* Make table responsive with custom scrollbar */
        .table-responsive {
            max-height: 60vh;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
        }
        
        .table-responsive::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        
        .table-responsive::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        
        .table-responsive::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        
        .table-responsive::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        
        /* Timeline styling */
        .timeline {
            list-style: none;
            padding-left: 0;
            position: relative;
        }
        
        .timeline:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #ddd;
            left: 7px;
            margin-left: 0;
        }
        
        .timeline-item {
            position: relative;
            padding-left: 30px;
            margin-bottom: 20px;
        }
        
        .timeline-marker {
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #637c94;
            left: 0;
            top: 3px;
        }
        
        .timeline-content h6 {
            color: #637c94;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Remove any existing modals
    const existingModal = document.getElementById('tourDetailModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show the modal
    const modalElement = document.getElementById('tourDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Add event listener to the edit button within the detail modal
    document.getElementById('editTourBtn').addEventListener('click', function() {
        // First hide the detail modal
        modal.hide();
        
        // Create a data object with the tour information
        const tourData = {
            tenTour: name,
            soNgay: days,
            soDem: nights,
            giaTour: price.replace(/[^\d]/g, ''), // Remove non-numeric characters
            trangThai: status,
            loaiTour: getLabelFromTable('loaiTour', name) // Use the function to get the type
        };
        
        // Show edit form with this data
        showEditForm(1, null, tourData);
    });
}

function showAddTourForm() {
    const modalHTML = `
    <div class="modal fade" id="addTourModal" tabindex="-1" aria-labelledby="addTourModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addTourModalLabel">Thêm Tour Mới</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="max-height: calc(100vh - 210px); overflow-y: auto; padding-right: 10px;">
                    <form id="addTourForm">
                        <!-- Step 1: Thông tin cơ bản -->
                        <div id="step1" class="form-step">
                            <h5 class="mb-3">Thông tin cơ bản tour</h5>
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <label for="tourName" class="form-label">Tên tour</label>
                                    <input type="text" class="form-control" id="tourName" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <label for="tourMainImage" class="form-label">Ảnh chính của tour <small class="text-muted">(Chỉ chọn 1 ảnh)</small></label>
                                    <input type="file" class="form-control" id="tourMainImage" accept="image/*" required onchange="validateMainImage(this)">
                                    <div class="preview mt-2" id="mainImagePreview"></div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <label class="form-label">Ảnh phụ của tour <small class="text-muted">(Có thể chọn nhiều ảnh)</small></label>
                                    <input type="file" class="form-control" id="tourSubImages" accept="image/*" multiple>
                                    <div id="subImagesPreview" class="d-flex flex-wrap gap-2 mt-2"></div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-3">
                                    <label for="tourDays" class="form-label">Số ngày</label>
                                    <input type="number" class="form-control" id="tourDays" min="1" required>
                                </div>
                                <div class="col-md-3">
                                    <label for="tourNights" class="form-label">Số đêm</label>
                                    <input type="number" class="form-control" id="tourNights" min="0" required>
                                </div>
                                <div class="col-md-6">
                                    <label for="tourPrice" class="form-label">Giá tour</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="tourPrice" required>
                                        <span class="input-group-text">đ</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="tourType" class="form-label">Loại tour</label>
                                    <select class="form-select" id="tourType" required>
                                        <option value="" selected disabled>Chọn loại tour</option>
                                        <option value="Tour biển đảo">Tour biển đảo</option>
                                        <option value="Tour núi rừng">Tour núi rừng</option>
                                        <option value="Tour văn hóa">Tour văn hóa</option>
                                        <option value="Tour ẩm thực">Tour ẩm thực</option>
                                        <option value="Tour mạo hiểm">Tour mạo hiểm</option>
                                        <option value="Tour nghỉ dưỡng">Tour nghỉ dưỡng</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Dịch vụ tour</label>
                                <div class="row" id="tourServices">
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Khách sạn" id="service1">
                                            <label class="form-check-label" for="service1">Khách sạn</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Vé máy bay" id="service2">
                                            <label class="form-check-label" for="service2">Vé máy bay</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Bữa ăn" id="service3">
                                            <label class="form-check-label" for="service3">Bữa ăn</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Hướng dẫn viên" id="service4">
                                            <label class="form-check-label" for="service4">Hướng dẫn viên</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Vé tham quan" id="service5">
                                            <label class="form-check-label" for="service5">Vé tham quan</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="Bảo hiểm" id="service6">
                                            <label class="form-check-label" for="service6">Bảo hiểm</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="tourDescription" class="form-label">Mô tả cơ bản tour</label>
                                <textarea class="form-control" id="tourDescription" rows="4" required></textarea>
                            </div>
                        </div>

                        <!-- Step 2: Số lượng và ngày -->
                        <div id="step2" class="form-step" style="display: none;">
                            <h5 class="mb-3">Số lượng và thời gian</h5>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="maxCapacity" class="form-label">Số lượng tour</label>
                                    <input type="number" class="form-control" id="maxCapacity" min="1" value="1" required>
                                    <small class="form-text text-muted">Số lượng chuyến tour sẽ diễn ra</small>
                                </div>
                                <div class="col-md-6">
                                    <label for="tourStatus" class="form-label">Trạng thái</label>
                                    <select class="form-select" id="tourStatus" required>
                                        <option value="Đang mở bán">Đang mở bán</option>
                                        <option value="Sắp đủ">Sắp đủ</option>
                                        <option value="Đã hết chỗ">Đã hết chỗ</option>
                                        <option value="Mới mở">Mới mở</option>
                                        <option value="Chờ duyệt">Chờ duyệt</option>
                                    </select>
                                </div>
                            </div>
                            <div id="datePairsContainer" class="mb-3">
                                <!-- Các chuyến đi sẽ được tạo động ở đây -->
                            </div>
                        </div>

                        <!-- Step 3: Lịch trình -->
                        <div id="step3" class="form-step" style="display: none;">
                            <h5 class="mb-3">Lịch trình tour</h5>
                            <div id="scheduleContainer">
                                <!-- Lịch trình sẽ được tạo động dựa trên số ngày -->
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                    <button type="button" class="btn btn-primary" id="prevStep" style="display: none;">Quay lại</button>
                    <button type="button" class="btn btn-primary" id="nextStep">Tiếp tục</button>
                    <button type="button" class="btn btn-success" id="saveTour" style="display: none;">Lưu tour</button>
                </div>
            </div>
        </div>
    </div>
    `;

    // Remove any existing modals
    const existingModal = document.getElementById('addTourModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show the modal
    const modalElement = document.getElementById('addTourModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    // Các biến để theo dõi bước
    let currentStep = 1;
    const totalSteps = 3;

    // Hàm tạo cặp ngày động dựa trên maxCapacity
    function updateDatePairs() {
        const maxCapacity = parseInt(document.getElementById('maxCapacity').value) || 1;
        const container = document.getElementById('datePairsContainer');
        container.innerHTML = '';

        for (let i = 0; i < maxCapacity; i++) {
            const newPair = document.createElement('div');
            newPair.className = 'date-pair mb-3';
            newPair.innerHTML = `
                <div class="card border-0 shadow-sm" style="border-color: #51A7BF !important; border-width: 2px !important; border-style: solid !important;">
                    <div class="card-body" style="background-color: #f8fcff;">
                        <h6 class="text-secondary mb-3">Chuyến đi ${i + 1}</h6>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label" style="color: #51A7BF;"><i class="fas fa-plane-departure me-1"></i> Ngày khởi hành</label>
                                <div class="input-group">
                                    <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="far fa-calendar-alt"></i></span>
                                    <input type="date" class="form-control startDate" ${i === 0 ? 'id="startDate"' : ''} required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label" style="color: #51A7BF;"><i class="fas fa-plane-arrival me-1"></i> Ngày kết thúc</label>
                                <div class="input-group">
                                    <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="far fa-calendar-check"></i></span>
                                    <input type="date" class="form-control endDate" ${i === 0 ? 'id="endDate"' : ''} readonly>
                                    <!--<span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;" title="Tính toán tự động dựa trên ngày khởi hành và số ngày"><i class="fas fa-calculator"></i></span>-->
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-4">
                                <label class="form-label" style="color: #51A7BF;"><i class="far fa-clock me-1"></i> Giờ khởi hành</label>
                                <div class="input-group">
                                    <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="fas fa-hourglass-start"></i></span>
                                    <input type="time" class="form-control departureTime" required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" style="color: #51A7BF;"><i class="fas fa-users me-1"></i> Giờ tập trung</label>
                                <div class="input-group">
                                    <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="fas fa-hourglass-half"></i></span>
                                    <input type="time" class="form-control gatheringTime" required>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label" style="color: #51A7BF;"><i class="fas fa-map-marker-alt me-1"></i> Điểm khởi hành</label>
                                <div class="input-group">
                                    <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="fas fa-map-signs"></i></span>
                                    <select class="form-select departureLocation" required>
                                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        <option value="Nha Trang">Nha Trang</option>
                                        <option value="Phú Quốc">Phú Quốc</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(newPair);
        }
        updateAllEndDates(); // Cập nhật ngày kết thúc sau khi tạo các cặp ngày
    }

    // Xử lý preview ảnh chính và validate chỉ cho phép chọn 1 ảnh
    function validateMainImage(input) {
        if (input.files.length > 1) {
            alert('Chỉ được chọn 1 ảnh chính cho tour!');
            input.value = '';
            document.getElementById('mainImagePreview').innerHTML = '';
            return;
        }

        const preview = document.getElementById('mainImagePreview');
        preview.innerHTML = '';
        if (input.files && input.files[0]) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(input.files[0]);
            img.style.maxWidth = '200px';
            img.className = 'img-thumbnail mt-2';
            preview.appendChild(img);
        }
    }

    // Xử lý preview ảnh phụ
    document.getElementById('tourSubImages').addEventListener('change', function(e) {
        const preview = document.getElementById('subImagesPreview');
        preview.innerHTML = '';
        if (this.files) {
            Array.from(this.files).forEach(file => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'position-relative';

                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.style.maxWidth = '100px';
                img.className = 'img-thumbnail';

                const removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                removeBtn.className = 'btn btn-danger btn-sm position-absolute top-0 end-0';
                removeBtn.innerHTML = '×';
                removeBtn.onclick = function() {
                    imgContainer.remove();
                };

                imgContainer.appendChild(img);
                imgContainer.appendChild(removeBtn);
                preview.appendChild(imgContainer);
            });
        }
    });

    // Function to update end date for a specific date pair
    function updateEndDate(startDateInput) {
        const startDateValue = startDateInput.value;
        const days = parseInt(document.getElementById('tourDays').value) || 0;
        const datePair = startDateInput.closest('.date-pair');
        const endDateInput = datePair.querySelector('.endDate');

        if (startDateValue && days > 0) {
            const startDate = new Date(startDateValue);
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + days - 1);
            endDateInput.value = endDate.toISOString().split('T')[0];
        } else {
            endDateInput.value = '';
        }
    }

    // Function to update all end dates
    function updateAllEndDates() {
        const startDates = document.querySelectorAll('.startDate');
        startDates.forEach(startDate => updateEndDate(startDate));
    }

    // Tạo lịch trình dựa trên số ngày
    function createSchedule() {
        const days = parseInt(document.getElementById('tourDays').value) || 0;
        const nights = parseInt(document.getElementById('tourNights').value) || 0;
        const startDate = document.getElementById('startDate').value;
        const scheduleContainer = document.getElementById('scheduleContainer');
        scheduleContainer.innerHTML = '';

        if (!days || !startDate) {
            scheduleContainer.innerHTML = '<div class="alert alert-warning">Vui lòng nhập số ngày và ngày bắt đầu để tạo lịch trình</div>';
            return;
        }

        for (let i = 1; i <= days; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + i - 1);
            const formattedDate = currentDate.toLocaleDateString('vi-VN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const dayElement = document.createElement('div');
            dayElement.className = 'schedule-day mb-4 border rounded-3 position-relative';
            dayElement.innerHTML = `
                <div class="schedule-day-header bg-light p-3 border-bottom">
                    <h6 class="mb-0 text-primary">Ngày ${i} - ${formattedDate}</h6>
                </div>
                <div class="schedule-day-content p-3">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label d-flex align-items-center">
                                    <i class="fas fa-sun text-warning me-2"></i>
                                    Hoạt động buổi sáng
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    <input type="time" class="form-control" name="morning_time_${i}" value="08:00">
                                </div>
                                <textarea class="form-control mt-2" name="morning_${i}" rows="2" required 
                                    placeholder="Mô tả hoạt động buổi sáng..."></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label d-flex align-items-center">
                                    <i class="fas fa-cloud-sun text-info me-2"></i>
                                    Hoạt động buổi trưa
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    <input type="time" class="form-control" name="noon_time_${i}" value="12:00">
                                </div>
                                <textarea class="form-control mt-2" name="noon_${i}" rows="2" required 
                                    placeholder="Mô tả hoạt động buổi trưa..."></textarea>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label d-flex align-items-center">
                                    <i class="fas fa-sun text-danger me-2"></i>
                                    Hoạt động buổi chiều
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    <input type="time" class="form-control" name="afternoon_time_${i}" value="14:00">
                                </div>
                                <textarea class="form-control mt-2" name="afternoon_${i}" rows="2" required 
                                    placeholder="Mô tả hoạt động buổi chiều..."></textarea>
                            </div>
                            <div class="mb-3">
                                <label class="form-label d-flex align-items-center">
                                    <i class="fas fa-moon text-primary me-2"></i>
                                    Hoạt động buổi tối
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light">
                                        <i class="far fa-clock"></i>
                                    </span>
                                    <input type="time" class="form-control" name="evening_time_${i}" value="19:00">
                                </div>
                                <textarea class="form-control mt-2" name="evening_${i}" rows="2" required 
                                    placeholder="Mô tả hoạt động buổi tối..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="form-group">
                            <label class="form-label d-flex align-items-center">
                                <i class="fas fa-map-marker-alt text-danger me-2"></i>
                                Điểm đến trong ngày
                            </label>
                            <input type="text" class="form-control" name="destinations_${i}" 
                                placeholder="Nhập các điểm đến trong ngày...">
                        </div>
                        <div class="form-group mt-2">
                            <label class="form-label d-flex align-items-center">
                                <i class="fas fa-utensils text-success me-2"></i>
                                Bữa ăn
                            </label>
                            <div class="d-flex gap-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="meal_breakfast_${i}" checked>
                                    <label class="form-check-label">Sáng</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="meal_lunch_${i}" checked>
                                    <label class="form-check-label">Trưa</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="meal_dinner_${i}" checked>
                                    <label class="form-check-label">Tối</label>
                                </div>
                            </div>
                        </div>
                        ${i <= nights ? `
                        <div class="form-group mt-2">
                            <label class="form-label d-flex align-items-center">
                                <i class="fas fa-bed text-info me-2"></i>
                                Thông tin lưu trú
                            </label>
                            <input type="text" class="form-control" name="accommodation_${i}" 
                                placeholder="Nhập thông tin khách sạn/nơi lưu trú...">
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
            scheduleContainer.appendChild(dayElement);
        }

        if (days > 0) {
            const lastDayElement = scheduleContainer.querySelector('.schedule-day:last-child');
            const noteDiv = document.createElement('div');
            noteDiv.className = 'mt-3 text-muted fst-italic';
            noteDiv.innerHTML = `<small><i class="fas fa-info-circle me-1"></i>Ngày cuối cùng của hành trình</small>`;
            lastDayElement.querySelector('.schedule-day-content').appendChild(noteDiv);
        }
    }

    // Khởi tạo cặp ngày ban đầu
    updateDatePairs();

    // Event listener cho maxCapacity để cập nhật số lượng chuyến đi
    document.getElementById('maxCapacity').addEventListener('input', updateDatePairs);

    // Event listeners cho việc tính toán ngày
    document.getElementById('tourDays').addEventListener('change', updateAllEndDates);

    // Thêm event listener cho từng startDate khi được tạo
    function addStartDateListeners() {
        const startDates = document.querySelectorAll('.startDate');
        startDates.forEach(startDate => {
            startDate.addEventListener('change', function() {
                updateEndDate(this);
                if (currentStep === 3 && this.id === 'startDate') {
                    createSchedule();
                }
            });
        });
    }

    // Gọi hàm thêm listener sau khi tạo cặp ngày
    document.getElementById('maxCapacity').addEventListener('input', function() {
        updateDatePairs();
        addStartDateListeners(); // Thêm listener cho các startDate mới
    });

    // Thêm listener ban đầu
    addStartDateListeners();

    // Event listeners cho các nút điều hướng
    const nextStepBtn = document.getElementById('nextStep');
    const prevStepBtn = document.getElementById('prevStep');
    const saveTourBtn = document.getElementById('saveTour');

    nextStepBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            const currentStepElement = document.getElementById(`step${currentStep}`);
            const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('is-invalid');
                    isValid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (!isValid) {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                return;
            }

            document.getElementById(`step${currentStep}`).style.display = 'none';
            currentStep++;
            document.getElementById(`step${currentStep}`).style.display = 'block';

            if (currentStep === totalSteps) {
                nextStepBtn.style.display = 'none';
                saveTourBtn.style.display = 'block';
                createSchedule();
            }
            prevStepBtn.style.display = 'block';
        }
    });

    prevStepBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            document.getElementById(`step${currentStep}`).style.display = 'none';
            currentStep--;
            document.getElementById(`step${currentStep}`).style.display = 'block';

            if (currentStep === 1) {
                prevStepBtn.style.display = 'none';
            }
            nextStepBtn.style.display = 'block';
            saveTourBtn.style.display = 'none';
        }
    });

    // Xử lý lưu tour
    saveTourBtn.addEventListener('click', function() {
        const form = document.getElementById('addTourForm');
        const requiredInputs = form.querySelectorAll('[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (isValid) {
            const selectedServices = Array.from(document.querySelectorAll('#tourServices input[type="checkbox"]:checked'))
                .map(checkbox => checkbox.value);

            const scheduleData = [];
            const days = parseInt(document.getElementById('tourDays').value);

            for (let i = 1; i <= days; i++) {
                scheduleData.push({
                    day: i,
                    morning: document.querySelector(`textarea[name="morning_${i}"]`).value,
                    afternoon: document.querySelector(`textarea[name="afternoon_${i}"]`).value,
                    evening: document.querySelector(`textarea[name="evening_${i}"]`).value
                });
            }

            const datePairs = document.querySelectorAll('.date-pair');
            const tripsData = Array.from(datePairs).map((pair, index) => ({
                tripNumber: index + 1,
                startDate: pair.querySelector('.startDate').value,
                endDate: pair.querySelector('.endDate').value,
                departureTime: pair.querySelector('.departureTime').value,
                gatheringTime: pair.querySelector('.gatheringTime').value,
                departureLocation: pair.querySelector('.departureLocation').value
            }));

            const tourData = {
                name: document.getElementById('tourName').value,
                mainImage: document.getElementById('tourMainImage').files[0],
                subImages: Array.from(document.getElementById('tourSubImages').files),
                days: document.getElementById('tourDays').value,
                nights: document.getElementById('tourNights').value,
                price: document.getElementById('tourPrice').value,
                services: selectedServices,
                description: document.getElementById('tourDescription').value,
                maxCapacity: document.getElementById('maxCapacity').value,
                status: document.getElementById('tourStatus').value,
                trips: tripsData,
                schedule: scheduleData
            };

            console.log('Tour Data:', tourData);
            alert('Tour đã được thêm thành công!');
            modal.hide();

            const newRow = `
                <tr>
                    <td>${tourData.name}</td>
                    <td>${tourData.trips[0].startDate} - ${tourData.trips[0].endDate}</td>
                    <td>${tourData.days} ngày ${tourData.nights} đêm</td>
                    <td>${tourData.price}đ</td>
                    <td><span class="badge bg-success">${tourData.status}</span></td>
                    <td>0/${tourData.maxCapacity}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary"><i class="fas fa-eye"></i></button>
                        <button class="btn btn-sm btn-outline-warning"><i class="fas fa-edit"></i></button>
                        <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `;
            document.querySelector('.table tbody')?.insertAdjacentHTML('afterbegin', newRow);
        } else {
            alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
        }
    });
}

// Helper function to format date from YYYY-MM-DD to DD/MM/YYYY
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Helper function to format currency
function formatCurrency(amount) {
    return Number(amount).toLocaleString('vi-VN') + ' đ';
} 
// Function to show vehicle details in a modal
function showVehicleDetails(name, capacity) {
    // Create modal element
    const modalHTML = `
    <div class="modal fade" id="vehicleDetailModal" tabindex="-1" aria-labelledby="vehicleDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="vehicleDetailModalLabel">Chi tiết phương tiện</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-4">
                        <div class="col-md-5">
                            <img src="hinh/vehicle-placeholder.jpg" class="img-fluid rounded mb-3" alt="Vehicle image" onerror="this.src='https://via.placeholder.com/400x300?text=Hình+ảnh+phương+tiện'">
                        </div>
                        <div class="col-md-7">
                            <h4 class="mb-3">${name}</h4>
                            <div class="mb-2">
                                <strong>Số lượng chỗ:</strong>
                                <span>${capacity}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" id="editVehicleBtn" class="btn btn-primary">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing modals
    const existingModal = document.getElementById('vehicleDetailModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show the modal
    const modalElement = document.getElementById('vehicleDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    // Add event listener to the edit button within the detail modal
    document.getElementById('editVehicleBtn').addEventListener('click', function() {
        // First hide the detail modal
        modal.hide();
        
        // Create a data object with the vehicle information
        const vehicleData = {
            tenPT: name,
            soLuongCho: capacity
        };
        
        // Show edit form with this data
        showEditForm(2, null, vehicleData);
    });
}

// Helper functions to retrieve data based on database schema
function getLabelFromTable(tableType, name) {
    // This would normally query the database
    // For now we'll use the mock data based on the schema
    if (tableType === 'loaiTour') {
        // Find the tour in our sample data 
        const tours = [
            { name: 'Khám phá Đà Lạt', type: 'Tour núi rừng' },
            { name: 'Vịnh Hạ Long - Quảng Ninh', type: 'Tour biển đảo' },
            { name: 'Phú Quốc - Thiên đường biển đảo', type: 'Tour biển đảo' },
            { name: 'Đà Nẵng - Hội An - Huế', type: 'Tour văn hóa' },
            { name: 'Sapa - Fansipan', type: 'Tour núi rừng' }
        ];
        
        const tour = tours.find(t => t.name === name);
        return tour ? tour.type : 'Không xác định';
    }
    
    return 'Không xác định';
}

function getDichVuTour(name) {
    // This would normally query the database
    // Mock data based on schema
    const tourServices = {
        'Khám phá Đà Lạt': 'Xe đưa đón, khách sạn 3 sao, ăn chính, hướng dẫn viên',
        'Vịnh Hạ Long - Quảng Ninh': 'Xe đưa đón, tàu tham quan, khách sạn 4 sao',
        'Phú Quốc - Thiên đường biển đảo': 'Vé máy bay, resort 4 sao, buffet sáng',
        'Đà Nẵng - Hội An - Huế': 'Vé máy bay, khách sạn 4 sao, xe đưa đón',
        'Sapa - Fansipan': 'Xe limousine, homestay, vé cáp treo, HDV'
    };
    
    return tourServices[name] || 'Không có thông tin';
}

function getGhiChu(name) {
    // Mock data based on schema
    const notes = {
        'Khám phá Đà Lạt': 'Tour hot',
        'Vịnh Hạ Long - Quảng Ninh': 'Tour cao cấp',
        'Phú Quốc - Thiên đường biển đảo': 'Tour sang chảnh',
        'Đà Nẵng - Hội An - Huế': 'Tour văn hóa',
        'Sapa - Fansipan': 'Tour mạo hiểm'
    };
    
    return notes[name] || 'Không có ghi chú';
}

function getLichTrinhHTML(name, days) {
    // This would normally get data from LichTrinh table in database
    // For the demo, we'll create a simple accordion based on the number of days
    let html = '';
    
    for (let i = 1; i <= days; i++) {
        const isFirst = i === 1;
        html += `
                                <div class="accordion-item">
                <h2 class="accordion-header" id="heading${i}">
                    <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="${isFirst}" aria-controls="collapse${i}">
                        Ngày ${i}
                                        </button>
                                    </h2>
                <div id="collapse${i}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="heading${i}" data-bs-parent="#accordionSchedule">
                                        <div class="accordion-body">
                        <p>Thông tin về lịch trình ngày ${i} sẽ được hiển thị từ cơ sở dữ liệu.</p>
                                        </div>
                                    </div>
                                </div>
        `;
    }
    
    return html;
}

function getDichVuTourDetails(name) {
    // This would pull from the DichVuTour field in the database
    return `<p>Dịch vụ bao gồm: ${getDichVuTour(name)}</p>`;
}

// Function to show tour type details in a modal
function showTourTypeDetails(name) {
    // Find matching loại tour code based on name
    const tourTypeCode = getTourTypeCode(name);
    const associatedTours = getToursForType(name);
    
    // Create modal element
    const modalHTML = `
    <div class="modal fade" id="tourTypeDetailModal" tabindex="-1" aria-labelledby="tourTypeDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tourTypeDetailModalLabel">Chi tiết loại tour</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-4">
                        <div class="col-md-12">
                            <h4 class="mb-3">${name}</h4>
                            <div class="mb-2">
                                <strong>Mã loại:</strong>
                                <span>${tourTypeCode}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-3">
                                <div class="card-header text-white" style="background-color: #637c94;">
                                    <h5 class="m-0">Tours thuộc loại này</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group">
                                        ${associatedTours.map(tour => `
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                ${tour.name}
                                                <span class="badge bg-${getBadgeColor(tour.status)} rounded-pill">${tour.status}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" id="editTourTypeBtn" class="btn btn-primary">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing modals
    const existingModal = document.getElementById('tourTypeDetailModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show the modal
    const modalElement = document.getElementById('tourTypeDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    // Add event listener to the edit button within the detail modal
    document.getElementById('editTourTypeBtn').addEventListener('click', function() {
        // First hide the detail modal
        modal.hide();
        
        // Create a data object with the tour type information
        const tourTypeData = {
            tenLoai: name,
            maLoai: tourTypeCode
        };
        
        // Show edit form with this data
        showEditForm(3, null, tourTypeData);
    });
}

// Function to get tour type code from tour type name
function getTourTypeCode(typeName) {
    // This would normally query the database
    // Mock data based on schema
    const tourTypes = {
        'Tour biển đảo': 'LT001',
        'Tour núi rừng': 'LT002',
        'Tour văn hóa': 'LT003',
        'Tour ẩm thực': 'LT004',
        'Tour mạo hiểm': 'LT005',
        'Tour nghỉ dưỡng': 'LT006'
    };
    
    return tourTypes[typeName] || 'Không xác định';
}

// Function to get tours associated with a type
function getToursForType(typeName) {
    // This would normally query the database to find all tours with the given type
    // Mock data based on schema
    const allTours = [
        { name: 'Khám phá Đà Lạt', type: 'Tour núi rừng', status: 'Đang mở bán' },
        { name: 'Vịnh Hạ Long - Quảng Ninh', type: 'Tour biển đảo', status: 'Sắp đủ' },
        { name: 'Phú Quốc - Thiên đường biển đảo', type: 'Tour biển đảo', status: 'Đã hết chỗ' },
        { name: 'Đà Nẵng - Hội An - Huế', type: 'Tour văn hóa', status: 'Mới mở' },
        { name: 'Sapa - Fansipan', type: 'Tour núi rừng', status: 'Chờ duyệt' },
        { name: 'Ẩm thực Hà Nội', type: 'Tour ẩm thực', status: 'Đang mở bán' },
        { name: 'Khám phá Đảo Lý Sơn', type: 'Tour mạo hiểm', status: 'Đang mở bán' },
        { name: 'Nghỉ dưỡng Nha Trang', type: 'Tour nghỉ dưỡng', status: 'Đang mở bán' }
    ];
    
    // Filter tours by type
    return allTours.filter(tour => tour.type === typeName);
}

// Function to show departure point details in a modal
function showDeparturePointDetails(name, address, phone) {
    // Find matching departure point code based on name
    const departureCode = getDeparturePointCode(name);
    const associatedTours = getToursForDeparturePoint(name);
    
    // Create modal element
    const modalHTML = `
    <div class="modal fade" id="departurePointDetailModal" tabindex="-1" aria-labelledby="departurePointDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="departurePointDetailModalLabel">Chi tiết điểm khởi hành</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-4">
                        <div class="col-md-12">
                            <h4 class="mb-3"><i class="fas fa-map-marker-alt me-2 text-danger"></i>${name}</h4>
                            <div class="mb-2">
                                <strong><i class="fas fa-barcode me-2"></i>Mã điểm khởi hành:</strong>
                                <span>${departureCode}</span>
                            </div>
                            <div class="mb-2">
                                <strong><i class="fas fa-location-arrow me-2"></i>Địa chỉ:</strong>
                                <span>${address}</span>
                            </div>
                            <div class="mb-2">
                                <strong><i class="fas fa-phone me-2"></i>Số điện thoại:</strong>
                                <span>${phone}</span>
                            </div>
                            <div class="mt-3">
                                <p class="text-muted">
                                    <i class="fas fa-info-circle me-2"></i>
                                    Đây là điểm tập trung và khởi hành của các tour du lịch. Khách hàng vui lòng có mặt tại điểm khởi hành trước giờ xuất phát ít nhất 30 phút.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-3">
                                <div class="card-header text-white" style="background-color: #4e73df;">
                                    <h5 class="m-0"><i class="fas fa-bus me-2"></i>Tours khởi hành từ đây</h5>
                                </div>
                                <div class="card-body">
                                    ${associatedTours.length > 0 ? `
                                    <ul class="list-group">
                                        ${associatedTours.map(tour => `
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                <span><i class="fas fa-map me-2 text-primary"></i>${tour.name}</span>
                                                <div>
                                                    <span class="badge bg-${getBadgeColor(tour.status)} rounded-pill me-2">${tour.status}</span>
                                                    <span class="badge bg-primary rounded-pill">${tour.startDate}</span>
                                                </div>
                                            </li>
                                        `).join('')}
                                    </ul>
                                    ` : `<p class="text-muted">Chưa có tour nào khởi hành từ điểm này.</p>`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" id="editDeparturePointBtn" class="btn btn-primary">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing modals
    const existingModal = document.getElementById('departurePointDetailModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show the modal
    const modalElement = document.getElementById('departurePointDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    // Add event listener to the edit button within the detail modal
    document.getElementById('editDeparturePointBtn').addEventListener('click', function() {
        // First hide the detail modal
        modal.hide();
        
        // Create a data object with the departure point information
        const departurePointData = {
            tenDKH: name,
            diaChi: address,
            soDT: phone,
            maDKH: departureCode
        };
        
        // Show edit form with this data
        showEditForm(4, null, departurePointData);
    });
}

// Function to get departure point code from name
function getDeparturePointCode(name) {
    // This would normally query the database
    // Mock data based on schema
    const departurePoints = {
        'Hà Nội': 'KH001',
        'TP. Hồ Chí Minh': 'KH002',
        'Đà Nẵng': 'KH003',
        'Nha Trang': 'KH004',
        'Cần Thơ': 'KH005',
        'Đà Lạt': 'KH006'
    };
    
    return departurePoints[name] || 'Không xác định';
}

// Function to get tours associated with a departure point


// Function to show the edit form based on buttonType and row data
function showEditForm(buttonType, rowElement, manualData = null) {
    let modalHTML = '';
    let tourData = {};
    let vehicleData = {};
    let tourTypeData = {};
    let departurePointData = {};
    let destinationData = {};
    
    // For edit form, we need to extract the current values
    if (rowElement) {
        const cells = rowElement.cells;
        
        if (buttonType === 1) { // Tour editing
            tourData = {
                tenTour: cells[0].textContent,
                soNgay: cells[1].textContent,
                soDem: cells[2].textContent,
                giaTour: cells[3].textContent.replace(/[^\d]/g, ''), // Extract just the number
                loaiTour: cells[4].textContent,
                trangThai: cells[5].querySelector('.badge') ? cells[5].querySelector('.badge').textContent : 'Đang mở bán'
            };
        } else if (buttonType === 2) { // Vehicle editing
            vehicleData = {
                tenPT: cells[0].textContent,
                soLuongCho: cells[1].textContent
            };
        } else if (buttonType === 3) { // Tour type editing
            tourTypeData = {
                tenLoai: cells[0].textContent,
                maLoai: getTourTypeCode(cells[0].textContent)
            };
        } else if (buttonType === 4) { // Departure point editing
            departurePointData = {
                tenDKH: cells[0].textContent,
                diaChi: cells[1].textContent,
                soDT: cells[2].textContent,
                maDKH: getDeparturePointCode(cells[0].textContent)
            };
        } else if (buttonType === 5) { // Destination editing
            const imgElement = cells[2].querySelector('img');
            destinationData = {
                tenDD: cells[0].textContent,
                moTa: cells[1].textContent,
                hinhAnh: imgElement ? imgElement.src : '',
                maDD: getDestinationCode(cells[0].textContent)
            };
        }
    } else if (manualData) {
        // If editing from the detail view with passed data
        if (buttonType === 1) {
            tourData = manualData;
        } else if (buttonType === 2) {
            vehicleData = manualData;
        } else if (buttonType === 3) {
            tourTypeData = manualData;
        } else if (buttonType === 4) {
            departurePointData = manualData;
        } else if (buttonType === 5) {
            destinationData = manualData;
        }
    } 
    
    switch(buttonType) {
        case 1: // Tour Edit Form
            modalHTML = `
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Chỉnh sửa Tour</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="max-height: calc(100vh - 210px); overflow-y: auto; padding-right: 10px;">
                            <form id="editForm">
                                <!-- Step 1: Thông tin cơ bản -->
                                <div id="edit_step1" class="form-step">
                                    <h5 class="mb-3">Thông tin cơ bản tour</h5>
                                <div class="mb-3 d-none">
                                    <label for="edit_maTour" class="form-label">Mã Tour</label>
                                    <input type="text" class="form-control" id="edit_maTour" value="T001" readonly>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="edit_tenTour" class="form-label">Tên Tour</label>
                                        <input type="text" class="form-control" id="edit_tenTour" value="${tourData.tenTour || ''}" required>
                            </div>
                        </div>
                        <div class="row mb-3">
                                        <div class="col-md-12">
                                            <label for="edit_anhDaiDien" class="form-label">Ảnh chính của tour <small class="text-muted">(Chỉ chọn 1 ảnh)</small></label>
                                            <input type="file" class="form-control" id="edit_anhDaiDien" accept="image/*" onchange="validateMainImage(this)">
                                            <small class="text-muted">Để trống nếu không muốn thay đổi ảnh</small>
                                            <div class="preview mt-2" id="edit_mainImagePreview"></div>
                            </div>
                            </div>
                                    <div class="row mb-3">
                                        <div class="col-md-12">
                                            <label class="form-label">Ảnh phụ của tour <small class="text-muted">(Có thể chọn nhiều ảnh)</small></label>
                                            <input type="file" class="form-control" id="edit_tourSubImages" accept="image/*" multiple>
                                            <small class="text-muted">Để trống nếu không muốn thay đổi ảnh</small>
                                            <div id="edit_subImagesPreview" class="d-flex flex-wrap gap-2 mt-2"></div>
                        </div>
                                    </div>
                        <div class="row mb-3">
                                        <div class="col-md-3">
                                            <label for="edit_soNgay" class="form-label">Số ngày</label>
                                            <input type="number" class="form-control" id="edit_soNgay" value="${tourData.soNgay || ''}" min="1" required>
                                        </div>
                                        <div class="col-md-3">
                                            <label for="edit_soDem" class="form-label">Số đêm</label>
                                            <input type="number" class="form-control" id="edit_soDem" value="${tourData.soDem || ''}" min="0" required>
                                        </div>
                            <div class="col-md-6">
                                            <label for="edit_giaTour" class="form-label">Giá tour</label>
                                <div class="input-group">
                                            <input type="number" class="form-control" id="edit_giaTour" value="${tourData.giaTour || ''}" required>
                                    <span class="input-group-text">đ</span>
                                </div>
                            </div>
                                    </div>
                                    <div class="row mb-3">
                            <div class="col-md-6">
                                        <label for="edit_maLoai" class="form-label">Loại Tour</label>
                                        <select class="form-select" id="edit_maLoai" required>
                                            <option value="LT001" ${tourData.loaiTour === 'Tour biển đảo' ? 'selected' : ''}>Tour biển đảo</option>
                                            <option value="LT002" ${tourData.loaiTour === 'Tour núi rừng' ? 'selected' : ''}>Tour núi rừng</option>
                                            <option value="LT003" ${tourData.loaiTour === 'Tour văn hóa' ? 'selected' : ''}>Tour văn hóa</option>
                                            <option value="LT004" ${tourData.loaiTour === 'Tour ẩm thực' ? 'selected' : ''}>Tour ẩm thực</option>
                                            <option value="LT005" ${tourData.loaiTour === 'Tour mạo hiểm' ? 'selected' : ''}>Tour mạo hiểm</option>
                                            <option value="LT006" ${tourData.loaiTour === 'Tour nghỉ dưỡng' ? 'selected' : ''}>Tour nghỉ dưỡng</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                        <label for="edit_trangThai" class="form-label">Trạng thái</label>
                                        <select class="form-select" id="edit_trangThai" required>
                                            <option value="Đang mở bán" ${tourData.trangThai === 'Đang mở bán' ? 'selected' : ''}>Đang mở bán</option>
                                            <option value="Sắp đủ" ${tourData.trangThai === 'Sắp đủ' ? 'selected' : ''}>Sắp đủ</option>
                                            <option value="Đã hết chỗ" ${tourData.trangThai === 'Đã hết chỗ' ? 'selected' : ''}>Đã hết chỗ</option>
                                            <option value="Mới mở" ${tourData.trangThai === 'Mới mở' ? 'selected' : ''}>Mới mở</option>
                                            <option value="Chờ duyệt" ${tourData.trangThai === 'Chờ duyệt' ? 'selected' : ''}>Chờ duyệt</option>
                                        </select>
                            </div>
                        </div>
                                    <div class="mb-3">
                                        <label class="form-label">Dịch vụ tour</label>
                                        <div class="row" id="edit_tourServices">
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Khách sạn" id="edit_service1">
                                                    <label class="form-check-label" for="edit_service1">Khách sạn</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Vé máy bay" id="edit_service2">
                                                    <label class="form-check-label" for="edit_service2">Vé máy bay</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Bữa ăn" id="edit_service3">
                                                    <label class="form-check-label" for="edit_service3">Bữa ăn</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Hướng dẫn viên" id="edit_service4">
                                                    <label class="form-check-label" for="edit_service4">Hướng dẫn viên</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Vé tham quan" id="edit_service5">
                                                    <label class="form-check-label" for="edit_service5">Vé tham quan</label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="Bảo hiểm" id="edit_service6">
                                                    <label class="form-check-label" for="edit_service6">Bảo hiểm</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        <div class="mb-3">
                                    <label for="edit_dichVuTour" class="form-label">Dịch vụ Tour</label>
                                    <textarea class="form-control" id="edit_dichVuTour" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                                    <label for="edit_ghiChu" class="form-label">Ghi chú</label>
                                    <textarea class="form-control" id="edit_ghiChu" rows="2"></textarea>
                                    </div>
                        </div>
                        
                                <!-- Step 2: Số lượng và ngày -->
                                <div id="edit_step2" class="form-step" style="display: none;">
                                    <h5 class="mb-3">Số lượng và thời gian</h5>
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <label for="edit_maxCapacity" class="form-label">Số lượng tour</label>
                                            <input type="number" class="form-control" id="edit_maxCapacity" min="1" value="1" required>
                                            <small class="form-text text-muted">Số lượng chuyến tour sẽ diễn ra</small>
                                        </div>
                                    </div>
                                    <div id="edit_datePairsContainer" class="mb-3">
                                        <!-- Các chuyến đi sẽ được tạo động ở đây -->
                                    </div>
                                </div>

                                <!-- Step 3: Lịch trình -->
                                <div id="edit_step3" class="form-step" style="display: none;">
                                    <h5 class="mb-3">Lịch trình tour</h5>
                                    <div id="edit_scheduleContainer">
                                        <!-- Lịch trình sẽ được tạo động dựa trên số ngày -->
                                    </div>
                                </div>

                                <!-- Step 4: Điểm đến -->
                                <div id="edit_step4" class="form-step" style="display: none;">
                                    <h5 class="mb-3">Điểm đến</h5>
                        <div class="mb-3">
                                    <div class="row">
                                        <div class="col-md-6 mb-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="DD001" id="check_DD001">
                                                <label class="form-check-label" for="check_DD001">
                                                    Vịnh Hạ Long
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="DD002" id="check_DD002">
                                                <label class="form-check-label" for="check_DD002">
                                                    Phố cổ Hội An
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="DD003" id="check_DD003">
                                                <label class="form-check-label" for="check_DD003">
                                                    Đảo Phú Quốc
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="DD004" id="check_DD004">
                                                <label class="form-check-label" for="check_DD004">
                                                    Núi Fansipan
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="DD005" id="check_DD005">
                                                <label class="form-check-label" for="check_DD005">
                                                    Bà Nà Hills
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-2">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="DD006" id="check_DD006">
                                                <label class="form-check-label" for="check_DD006">
                                                    Thành phố Đà Lạt
                                                </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" class="btn btn-primary" id="edit_prevStep" style="display: none;">Quay lại</button>
                            <button type="button" class="btn btn-primary" id="edit_nextStep">Tiếp tục</button>
                            <button type="button" class="btn btn-success" id="edit_saveTour" style="display: none;">Cập nhật tour</button>
                </div>
            </div>
        </div>
    </div>
    `;
            break;
            
        case 2: // Vehicle Edit Form
            modalHTML = `
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Chỉnh sửa Phương Tiện</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                        <div class="modal-body">
                            <form id="editForm">
                                <div class="mb-3 d-none">
                                    <label for="edit_maPT" class="form-label">Mã phương tiện</label>
                                    <input type="text" class="form-control" id="edit_maPT" value="PT001" readonly>
                            </div>
                                <div class="mb-3">
                                    <label for="edit_tenPT" class="form-label">Tên phương tiện</label>
                                    <input type="text" class="form-control" id="edit_tenPT" value="${vehicleData.tenPT || ''}" required>
                        </div>
                                <div class="mb-3">
                                    <label for="edit_soLuongCho" class="form-label">Số lượng chỗ</label>
                                    <input type="text" class="form-control" id="edit_soLuongCho" value="${vehicleData.soLuongCho || ''}" required>
                                </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" class="btn btn-primary" onclick="updateData(2)">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
    `;
            break;
            
        case 3: // Tour Type Edit Form
            modalHTML = `
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Chỉnh sửa Loại Tour</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="editForm">
                                <div class="mb-3">
                                    <label for="edit_maLoai" class="form-label">Mã loại tour</label>
                                    <input type="text" class="form-control" id="edit_maLoai" value="${tourTypeData.maLoai || ''}" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_tenLoai" class="form-label">Tên loại tour</label>
                                    <input type="text" class="form-control" id="edit_tenLoai" value="${tourTypeData.tenLoai || ''}" required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" class="btn btn-primary" onclick="updateData(3)">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            break;
            
        case 4: // Departure Point Edit Form
            modalHTML = `
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Chỉnh sửa Điểm Khởi Hành</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="editForm">
                                <div class="mb-3">
                                    <label for="edit_maDKH" class="form-label">Mã điểm khởi hành</label>
                                    <input type="text" class="form-control" id="edit_maDKH" value="${departurePointData.maDKH || ''}" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_tenDKH" class="form-label">Tên điểm khởi hành</label>
                                    <input type="text" class="form-control" id="edit_tenDKH" value="${departurePointData.tenDKH || ''}" required>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_diaChi" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" id="edit_diaChi" value="${departurePointData.diaChi || ''}" required>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_soDT" class="form-label">Số điện thoại</label>
                                    <input type="text" class="form-control" id="edit_soDT" value="${departurePointData.soDT || ''}" required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" class="btn btn-primary" onclick="updateData(4)">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            break;
            
        case 5: // Destination Edit Form
            modalHTML = `
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalLabel">Chỉnh sửa Điểm Đến</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="editForm">
                                <div class="mb-3">
                                    <label for="edit_maDD" class="form-label">Mã điểm đến</label>
                                    <input type="text" class="form-control" id="edit_maDD" value="${destinationData.maDD || ''}" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_tenDD" class="form-label">Tên điểm đến</label>
                                    <input type="text" class="form-control" id="edit_tenDD" value="${destinationData.tenDD || ''}" required>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_moTa" class="form-label">Mô tả</label>
                                    <textarea class="form-control" id="edit_moTa" rows="3" required>${destinationData.moTa || ''}</textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_hinhAnh" class="form-label">Hình ảnh</label>
                                    <input type="file" class="form-control" id="edit_hinhAnh" accept="image/*">
                                    <small class="text-muted">Để trống nếu không muốn thay đổi hình ảnh</small>
                                    ${destinationData.hinhAnh ? `
                                    <div class="mt-2">
                                        <img src="${destinationData.hinhAnh}" alt="${destinationData.tenDD}" class="img-thumbnail" style="max-height: 100px;">
                                    </div>
                                    ` : ''}
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                            <button type="button" class="btn btn-primary" onclick="updateData(5)">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            break;
    }
    
    // Remove any existing edit modals
    const existingModal = document.getElementById('editModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add custom CSS for tour edit form scrollbar
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .modal-lg {
            max-width: 800px;
        }
        
        .tour-edit-form-body {
            max-height: 70vh;
            overflow-y: auto;
            padding-right: 10px;
            overflow-x: hidden;
        }
        
        .tour-edit-form-body::-webkit-scrollbar {
            width: 8px;
            background-color: #f5f5f5;
            border-radius: 10px;
        }
        
        .tour-edit-form-body::-webkit-scrollbar-track {
            background-color: #f5f5f5;
            border-radius: 10px;
        }
        
        .tour-edit-form-body::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 10px;
        }
        
        .tour-edit-form-body::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        }
        
        /* Make sure form elements don't overflow */
        .tour-edit-form-body .form-control, 
        .tour-edit-form-body .form-select,
        .tour-edit-form-body .input-group {
            max-width: 100%;
        }
        
        /* Ensure form labels don't wrap unnecessarily */
        .tour-edit-form-body label {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Show the modal
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    // If we're editing a tour, populate the service and note fields
    if (buttonType === 1 && tourData.tenTour) {
        document.getElementById('edit_dichVuTour').value = getDichVuTour(tourData.tenTour);
        document.getElementById('edit_ghiChu').value = getGhiChu(tourData.tenTour);
        
        // Check the appropriate destination checkboxes based on tour name
        if (tourData.tenTour.includes('Đà Lạt')) {
            document.getElementById('check_DD006').checked = true;
        } else if (tourData.tenTour.includes('Hạ Long')) {
            document.getElementById('check_DD001').checked = true;
        } else if (tourData.tenTour.includes('Phú Quốc')) {
            document.getElementById('check_DD003').checked = true;
        } else if (tourData.tenTour.includes('Đà Nẵng') || tourData.tenTour.includes('Hội An')) {
            document.getElementById('check_DD002').checked = true;
        } else if (tourData.tenTour.includes('Sapa') || tourData.tenTour.includes('Fansipan')) {
            document.getElementById('check_DD004').checked = true;
        }
        
        // Setup multi-step form for tour editing
        if (document.getElementById('edit_nextStep')) {
            let currentStep = 1;
            const totalSteps = 3;
            
            // Grab button references
            const nextStepBtn = document.getElementById('edit_nextStep');
            const prevStepBtn = document.getElementById('edit_prevStep');
            const saveTourBtn = document.getElementById('edit_saveTour');
            
            // Function to update date pairs for tour edit form
            function updateEditDatePairs() {
                const maxCapacity = parseInt(document.getElementById('edit_maxCapacity').value) || 1;
                const container = document.getElementById('edit_datePairsContainer');
                container.innerHTML = '';

                for (let i = 0; i < maxCapacity; i++) {
                    const newPair = document.createElement('div');
                    newPair.className = 'date-pair mb-3';
                    newPair.innerHTML = `
                        <div class="card border-0 shadow-sm" style="border-color: #51A7BF !important; border-width: 2px !important; border-style: solid !important;">
                            <div class="card-body" style="background-color: #f8fcff;">
                                <h6 class="text-secondary mb-3">Chuyến đi ${i + 1}</h6>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label class="form-label" style="color: #51A7BF;"><i class="fas fa-plane-departure me-1"></i> Ngày khởi hành</label>
                                        <div class="input-group">
                                            <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="far fa-calendar-alt"></i></span>
                                            <input type="date" class="form-control startDate" ${i === 0 ? 'id="edit_startDate"' : ''} required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label" style="color: #51A7BF;"><i class="fas fa-plane-arrival me-1"></i> Ngày kết thúc</label>
                                        <div class="input-group">
                                            <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="far fa-calendar-check"></i></span>
                                            <input type="date" class="form-control endDate" ${i === 0 ? 'id="edit_endDate"' : ''} readonly>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-4">
                                        <label class="form-label" style="color: #51A7BF;"><i class="far fa-clock me-1"></i> Giờ khởi hành</label>
                                        <div class="input-group">
                                            <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="fas fa-hourglass-start"></i></span>
                                            <input type="time" class="form-control departureTime" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label" style="color: #51A7BF;"><i class="fas fa-users me-1"></i> Giờ tập trung</label>
                                        <div class="input-group">
                                            <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="fas fa-hourglass-half"></i></span>
                                            <input type="time" class="form-control gatheringTime" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label class="form-label" style="color: #51A7BF;"><i class="fas fa-map-marker-alt me-1"></i> Điểm khởi hành</label>
                                        <div class="input-group">
                                            <span class="input-group-text" style="background-color: #51A7BF; color: #DAF4FF;"><i class="fas fa-map-signs"></i></span>
                                            <select class="form-select departureLocation" required>
                                                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                                                <option value="Hà Nội">Hà Nội</option>
                                                <option value="Đà Nẵng">Đà Nẵng</option>
                                                <option value="Nha Trang">Nha Trang</option>
                                                <option value="Phú Quốc">Phú Quốc</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    container.appendChild(newPair);
                }
                
                // Add event listeners to start dates to update end dates
                const startDates = document.querySelectorAll('#edit_datePairsContainer .startDate');
                startDates.forEach(input => {
                    input.addEventListener('change', function() {
                        updateEditEndDate(this);
                    });
                });
                
                updateAllEditEndDates();
            }
            
            // Function to update a single end date based on start date
            function updateEditEndDate(startDateInput) {
                const days = parseInt(document.getElementById('edit_soNgay').value);
                if (!startDateInput.value || !days) return;
                
                const startDate = new Date(startDateInput.value);
                const endDate = new Date(startDate);
                endDate.setDate(startDate.getDate() + parseInt(days));
                
                // Format as YYYY-MM-DD for input
                const endDateStr = endDate.toISOString().split('T')[0];
                
                // Find the corresponding end date input (sibling of the start date container)
                const datePair = startDateInput.closest('.date-pair');
                const endDateInput = datePair.querySelector('.endDate');
                if (endDateInput) {
                    endDateInput.value = endDateStr;
                }
            }
            
            // Function to update all end dates
            function updateAllEditEndDates() {
                const startDates = document.querySelectorAll('#edit_datePairsContainer .startDate');
                startDates.forEach(startDate => {
                    updateEditEndDate(startDate);
                });
            }
            
            // Function to create schedule form based on number of days
            function createEditSchedule() {
                const days = parseInt(document.getElementById('edit_soNgay').value) || 0;
                const container = document.getElementById('edit_scheduleContainer');
                container.innerHTML = '';
                
                for (let i = 1; i <= days; i++) {
                    const dayCard = document.createElement('div');
                    dayCard.className = 'card mb-4 shadow-sm border-0';
                    dayCard.style.borderColor = '#51A7BF';
                    dayCard.style.borderWidth = '2px';
                    dayCard.style.borderStyle = 'solid';
                    
                    dayCard.innerHTML = `
                        <div class="card-header bg-white border-bottom-0 pt-3 pb-0">
                            <h5 class="text-primary">Ngày ${i}</h5>
                        </div>
                        <div class="card-body" style="background-color: #f8fcff;">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label d-flex align-items-center">
                                            <i class="fas fa-coffee text-warning me-2"></i>
                                            Hoạt động buổi sáng
                                        </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-light">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            <input type="time" class="form-control" name="edit_morning_time_${i}" value="07:00">
                                        </div>
                                        <textarea class="form-control mt-2" name="edit_morning_${i}" rows="2" required 
                                            placeholder="Mô tả hoạt động buổi sáng..."></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label d-flex align-items-center">
                                            <i class="fas fa-utensils text-success me-2"></i>
                                            Hoạt động buổi trưa
                                        </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-light">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            <input type="time" class="form-control" name="edit_noon_time_${i}" value="12:00">
                                        </div>
                                        <textarea class="form-control mt-2" name="edit_noon_${i}" rows="2" required 
                                            placeholder="Mô tả hoạt động buổi trưa..."></textarea>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label d-flex align-items-center">
                                            <i class="fas fa-sun text-danger me-2"></i>
                                            Hoạt động buổi chiều
                                        </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-light">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            <input type="time" class="form-control" name="edit_afternoon_time_${i}" value="14:00">
                                        </div>
                                        <textarea class="form-control mt-2" name="edit_afternoon_${i}" rows="2" required 
                                            placeholder="Mô tả hoạt động buổi chiều..."></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label d-flex align-items-center">
                                            <i class="fas fa-moon text-primary me-2"></i>
                                            Hoạt động buổi tối
                                        </label>
                                        <div class="input-group">
                                            <span class="input-group-text bg-light">
                                                <i class="far fa-clock"></i>
                                            </span>
                                            <input type="time" class="form-control" name="edit_evening_time_${i}" value="18:00">
                                        </div>
                                        <textarea class="form-control mt-2" name="edit_evening_${i}" rows="2" required 
                                            placeholder="Mô tả hoạt động buổi tối..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="form-group">
                                    <label class="form-label d-flex align-items-center">
                                        <i class="fas fa-map-marker-alt text-danger me-2"></i>
                                        Điểm đến trong ngày
                                    </label>
                                    <input type="text" class="form-control" name="edit_destinations_${i}" 
                                        placeholder="Nhập các điểm đến trong ngày...">
                                </div>
                                <div class="form-group mt-2">
                                    <label class="form-label d-flex align-items-center">
                                        <i class="fas fa-utensils text-success me-2"></i>
                                        Bữa ăn
                                    </label>
                                    <div class="d-flex gap-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="edit_meal_breakfast_${i}" checked>
                                            <label class="form-check-label">Sáng</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="edit_meal_lunch_${i}" checked>
                                            <label class="form-check-label">Trưa</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="edit_meal_dinner_${i}" checked>
                                            <label class="form-check-label">Tối</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    container.appendChild(dayCard);
                }
            }
            
            // Listen for changes to number of days to update schedule
            document.getElementById('edit_soNgay').addEventListener('change', function() {
                if (currentStep === 3) {
                    createEditSchedule();
                }
            });
            
            // Listen for changes to max capacity
            document.getElementById('edit_maxCapacity').addEventListener('change', updateEditDatePairs);
            
            // Initial update of date pairs
            updateEditDatePairs();
            
            // Setup next and previous buttons
            nextStepBtn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    const currentStepElement = document.getElementById(`edit_step${currentStep}`);
                    const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
                    let isValid = true;

                    inputs.forEach(input => {
                        if (!input.value.trim()) {
                            input.classList.add('is-invalid');
                            isValid = false;
            } else {
                            input.classList.remove('is-invalid');
                        }
                    });

                    if (!isValid) {
                        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                        return;
                    }

                    document.getElementById(`edit_step${currentStep}`).style.display = 'none';
                    currentStep++;
                    document.getElementById(`edit_step${currentStep}`).style.display = 'block';

                    if (currentStep === 3) {
                        createEditSchedule(); // Create schedule based on days
                    }
                    
                    if (currentStep === totalSteps) {
                        nextStepBtn.style.display = 'none';
                        saveTourBtn.style.display = 'block';
                    }
                    
                    prevStepBtn.style.display = 'block';
                }
            });

            prevStepBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    document.getElementById(`edit_step${currentStep}`).style.display = 'none';
                    currentStep--;
                    document.getElementById(`edit_step${currentStep}`).style.display = 'block';

                    if (currentStep === 1) {
                        prevStepBtn.style.display = 'none';
                    }
                    
                    nextStepBtn.style.display = 'block';
                    saveTourBtn.style.display = 'none';
                }
            });
            
            // Save tour button
            saveTourBtn.addEventListener('click', function() {
                const form = document.getElementById('editForm');
                const requiredInputs = form.querySelectorAll('[required]');
                let isValid = true;

                requiredInputs.forEach(input => {
                    if (!input.value.trim()) {
                        input.classList.add('is-invalid');
                        isValid = false;
                    } else {
                        input.classList.remove('is-invalid');
                    }
                });

                if (isValid) {
                    // Get selected services
                    const selectedServices = Array.from(document.querySelectorAll('#edit_tourServices input[type="checkbox"]:checked'))
                        .map(checkbox => checkbox.value);
                    
                    // Get schedule data
                    const scheduleData = [];
                    const days = parseInt(document.getElementById('edit_soNgay').value);

                    for (let i = 1; i <= days; i++) {
                        scheduleData.push({
                            day: i,
                            morning: document.querySelector(`textarea[name="edit_morning_${i}"]`).value,
                            afternoon: document.querySelector(`textarea[name="edit_afternoon_${i}"]`).value,
                            evening: document.querySelector(`textarea[name="edit_evening_${i}"]`).value
                        });
                    }
                    
                    // Get selected destinations
                    const selectedDestinations = [];
                    document.querySelectorAll('#edit_step4 input[type="checkbox"]:checked').forEach(checkbox => {
                        selectedDestinations.push({
                            code: checkbox.value,
                            name: checkbox.nextElementSibling.textContent.trim()
                        });
                    });

                    // Get trip data
                    const datePairs = document.querySelectorAll('#edit_datePairsContainer .date-pair');
                    const tripsData = Array.from(datePairs).map((pair, index) => ({
                        tripNumber: index + 1,
                        startDate: pair.querySelector('.startDate').value,
                        endDate: pair.querySelector('.endDate').value,
                        departureTime: pair.querySelector('.departureTime').value,
                        gatheringTime: pair.querySelector('.gatheringTime').value,
                        departureLocation: pair.querySelector('.departureLocation').value
                    }));

                    // Update tour data
                    const updatedData = {
                        maTour: document.getElementById('edit_maTour').value,
                        tenTour: document.getElementById('edit_tenTour').value,
                        soNgay: document.getElementById('edit_soNgay').value,
                        soDem: document.getElementById('edit_soDem').value,
                        giaTour: document.getElementById('edit_giaTour').value,
                        loaiTour: document.getElementById('edit_maLoai').options[document.getElementById('edit_maLoai').selectedIndex].text,
                        trangThai: document.getElementById('edit_trangThai').value,
                        dichVuTour: document.getElementById('edit_dichVuTour').value,
                        ghiChu: document.getElementById('edit_ghiChu').value,
                        services: selectedServices,
                        trips: tripsData,
                        schedule: scheduleData,
                        destinations: selectedDestinations
                    };
                    
                    // Create SQL (in real app would be done on server)
                    const tourSQL = `UPDATE Tour 
                                    SET TenTour = '${updatedData.tenTour}', 
                                        SoNgay = ${updatedData.soNgay}, 
                                        SoDem = ${updatedData.soDem}, 
                                        Gia = ${updatedData.giaTour}, 
                                        DichVuTour = '${updatedData.dichVuTour}', 
                                        GhiChu = '${updatedData.ghiChu}', 
                                        TrangThaiTour = '${updatedData.trangThai}', 
                                        MaLoai = '${document.getElementById('edit_maLoai').value}'
                                    WHERE MaTour = '${updatedData.maTour}'`;
                    
                    console.log("Tour Data:", updatedData);
                    console.log("SQL would be: ", tourSQL);
                    
                    // Find the tour in the table and update its display
                    const tourTable = document.querySelector('table');
                    if (tourTable) {
                        const rows = tourTable.querySelectorAll('tbody tr');
                        
                        rows.forEach(row => {
                            const cells = row.cells;
                            // If this is the tour we just updated
                            if (cells[0].textContent === updatedData.tenTour || 
                                cells[0].textContent.trim() === updatedData.tenTour.trim()) {
                                // Update the row data
                                cells[0].textContent = updatedData.tenTour;
                                cells[1].textContent = updatedData.soNgay;
                                cells[2].textContent = updatedData.soDem;
                                cells[3].textContent = formatCurrency(updatedData.giaTour);
                                cells[4].textContent = updatedData.loaiTour;
                                
                                // Update status badge
                                const badgeSpan = cells[5].querySelector('.badge');
                                if (badgeSpan) {
                                    badgeSpan.textContent = updatedData.trangThai;
                                    badgeSpan.className = 'badge bg-' + getBadgeColor(updatedData.trangThai);
                                } else {
                                    cells[5].innerHTML = `<span class="badge bg-${getBadgeColor(updatedData.trangThai)}">${updatedData.trangThai}</span>`;
                                }
                                
                                // Highlight the updated row
                                highlightNewRow(row);
                            }
                        });
                    }
                    
                    // Hide the modal and show success message
                    alert('Tour đã được cập nhật thành công!');
                    modal.hide();
                    
                } else {
                    alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                }
            });
        }
    }
    
    // Update modal scrollbars
    checkScrollability();
}

// Function to update data from the edit form
function updateData(formType) {
    // Get the form data
    const form = document.getElementById('editForm');
        
        // Simple validation
        const requiredInputs = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                isValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });
        
        if (isValid) {
        // Prep data based on form type and create update SQL or perform AJAX call
        let updatedData = {};
        
        switch(formType) {
            case 1: // Tour
                updatedData = {
                    maTour: document.getElementById('edit_maTour').value,
                    tenTour: document.getElementById('edit_tenTour').value,
                    soNgay: document.getElementById('edit_soNgay').value,
                    soDem: document.getElementById('edit_soDem').value,
                    giaTour: document.getElementById('edit_giaTour').value,
                    loaiTour: document.getElementById('edit_maLoai').options[document.getElementById('edit_maLoai').selectedIndex].text,
                    trangThai: document.getElementById('edit_trangThai').value
                };
                
                // Create SQL (in real app would be done on server)
                const tourSQL = `UPDATE Tour 
                                SET TenTour = '${updatedData.tenTour}', 
                                    SoNgay = ${updatedData.soNgay}, 
                                    SoDem = ${updatedData.soDem}, 
                                    Gia = ${updatedData.giaTour}, 
                                    DichVuTour = '${document.getElementById('edit_dichVuTour').value}', 
                                    GhiChu = '${document.getElementById('edit_ghiChu').value}', 
                                    TrangThaiTour = '${updatedData.trangThai}', 
                                    MaLoai = '${document.getElementById('edit_maLoai').value}'
                                WHERE MaTour = '${updatedData.maTour}'`;
                
                console.log("SQL would be: ", tourSQL);
                
                // Find the tour in the table and update its display
                const tourTable = document.querySelector('table');
                if (tourTable) {
                    const rows = tourTable.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const cells = row.cells;
                        // If this is the tour we just updated
                        if (cells[0].textContent === updatedData.tenTour) {
                            // Update the row data
                            cells[1].textContent = updatedData.soNgay;
                            cells[2].textContent = updatedData.soDem;
                            cells[3].textContent = new Intl.NumberFormat('vi-VN').format(updatedData.giaTour) + ' đ';
                            cells[4].textContent = updatedData.loaiTour;
                            
                            // Update status badge
                            const statusBadge = cells[5].querySelector('.badge');
                            if (statusBadge) {
                                statusBadge.textContent = updatedData.trangThai;
                                // Update badge color class
                                statusBadge.className = ''; // Clear existing classes
                                statusBadge.classList.add('badge', `bg-${getBadgeColor(updatedData.trangThai)}`);
                                
                                // Add text-dark class if needed
                                if (updatedData.trangThai === 'Sắp đủ' || updatedData.trangThai === 'Mới mở') {
                                    statusBadge.classList.add('text-dark');
                                }
                            }
                        }
                    });
                }
                
                // If a tour detail modal is open and showing this tour, update it as well
                const tourDetailModal = document.getElementById('tourDetailModal');
                if (tourDetailModal && tourDetailModal.querySelector('h4').textContent === updatedData.tenTour) {
                    // Update days and nights
                    const timeSpan = tourDetailModal.querySelector('.col-md-7 div:nth-child(1) span');
                    if (timeSpan) {
                        timeSpan.textContent = `${updatedData.soNgay} ngày ${updatedData.soDem} đêm`;
                    }
                    
                    // Update price
                    const priceSpan = tourDetailModal.querySelector('.col-md-7 div:nth-child(2) span');
                    if (priceSpan) {
                        priceSpan.textContent = new Intl.NumberFormat('vi-VN').format(updatedData.giaTour) + ' đ';
                    }
                    
                    // Update tour type
                    const typeSpan = tourDetailModal.querySelector('.col-md-7 div:nth-child(4) span');
                    if (typeSpan) {
                        typeSpan.textContent = updatedData.loaiTour;
                    }
                    
                    // Update status badge
                    const statusBadge = tourDetailModal.querySelector('.badge');
                    if (statusBadge) {
                        statusBadge.textContent = updatedData.trangThai;
                        // Update badge color class
                        statusBadge.className = ''; // Clear existing classes
                        statusBadge.classList.add('badge', `bg-${getBadgeColor(updatedData.trangThai)}`);
                        
                        // Add text-dark class if needed
                        if (updatedData.trangThai === 'Sắp đủ' || updatedData.trangThai === 'Mới mở') {
                            statusBadge.classList.add('text-dark');
                        }
                    }
                }
                break;
                
            case 2: // Vehicle
                updatedData = {
                    maPT: document.getElementById('edit_maPT').value,
                    tenPT: document.getElementById('edit_tenPT').value,
                    soLuongCho: document.getElementById('edit_soLuongCho').value
                };
                
                // Create SQL (in real app would be done on server)
                const vehicleSQL = `UPDATE PhuongTienDC 
                                SET TenPT = '${updatedData.tenPT}', 
                                    SoLuongCho = '${updatedData.soLuongCho}'
                                WHERE MaPT = '${updatedData.maPT}'`;
                
                console.log("SQL would be: ", vehicleSQL);
                
                // Find the vehicle in the table and update its display
                const vehicleTable = document.querySelector('table');
                if (vehicleTable) {
                    const rows = vehicleTable.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const cells = row.cells;
                        // If this is the vehicle we just updated
                        if (cells[0].textContent === updatedData.tenPT) {
                            // Update the row data
                            cells[1].textContent = updatedData.soLuongCho;
                        }
                    });
                }
                
                // If a vehicle detail modal is open and showing this vehicle, update it as well
                const vehicleDetailModal = document.getElementById('vehicleDetailModal');
                if (vehicleDetailModal && vehicleDetailModal.querySelector('h4').textContent === updatedData.tenPT) {
                    // Update capacity
                    const capacitySpan = vehicleDetailModal.querySelector('.col-md-7 div:nth-child(1) span');
                    if (capacitySpan) {
                        capacitySpan.textContent = updatedData.soLuongCho;
                    }
                    
                    // Update the description with new capacity
                    const descriptionP = vehicleDetailModal.querySelector('.card-body p:first-child');
                    if (descriptionP) {
                        descriptionP.textContent = `Phương tiện ${updatedData.tenPT} có sức chứa ${updatedData.soLuongCho}. Được trang bị đầy đủ các thiết bị an toàn và tiện nghi hiện đại.`;
                    }
                }
                break;
                
            case 3: // Tour Type
                updatedData = {
                    maLoai: document.getElementById('edit_maLoai').value,
                    tenLoai: document.getElementById('edit_tenLoai').value
                };
                
                // Create SQL (in real app would be done on server)
                const tourTypeSQL = `UPDATE LoaiTour 
                                    SET TenLoai = '${updatedData.tenLoai}'
                                    WHERE MaLoai = '${updatedData.maLoai}'`;
                
                console.log("SQL would be: ", tourTypeSQL);
                
                // Find the tour type in the table and update its display
                const tourTypeTable = document.querySelector('table');
                if (tourTypeTable) {
                    const rows = tourTypeTable.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const cells = row.cells;
                        // Map MaLoai to the row
                        const rowMaLoai = getTourTypeCode(cells[0].textContent);
                        
                        // If this is the tour type we just updated
                        if (rowMaLoai === updatedData.maLoai) {
                            // Update the row data
                            cells[0].textContent = updatedData.tenLoai;
                        }
                    });
                }
                
                // If a tour type detail modal is open and showing this tour type, update it as well
                const tourTypeDetailModal = document.getElementById('tourTypeDetailModal');
                if (tourTypeDetailModal && tourTypeDetailModal.querySelector('span').textContent === updatedData.maLoai) {
                    // Update tour type name
                    const nameElement = tourTypeDetailModal.querySelector('h4');
                    if (nameElement) {
                        nameElement.textContent = updatedData.tenLoai;
                    }
                }
                break;
                
            case 4: // Departure Point
                updatedData = {
                    maDKH: document.getElementById('edit_maDKH').value,
                    tenDKH: document.getElementById('edit_tenDKH').value,
                    diaChi: document.getElementById('edit_diaChi').value,
                    soDT: document.getElementById('edit_soDT').value
                };
                
                // Create SQL (in real app would be done on server)
                const departureSQL = `UPDATE DiemKhoiHanh 
                                    SET TenDKH = '${updatedData.tenDKH}', 
                                        DC = '${updatedData.diaChi}', 
                                        SDT = '${updatedData.soDT}'
                                    WHERE MaDKH = '${updatedData.maDKH}'`;
                
                console.log("SQL would be: ", departureSQL);
                
                // Find the departure point in the table and update its display
                const departureTable = document.querySelector('table');
                if (departureTable) {
                    const rows = departureTable.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const cells = row.cells;
                        // Map MaDKH to the row
                        const rowMaDKH = getDeparturePointCode(cells[0].textContent);
                        
                        // If this is the departure point we just updated
                        if (rowMaDKH === updatedData.maDKH) {
                            // Update the row data
                            cells[0].textContent = updatedData.tenDKH;
                            cells[1].textContent = updatedData.diaChi;
                            cells[2].textContent = updatedData.soDT;
                        }
                    });
                }
                
                // If a departure point detail modal is open and showing this departure point, update it as well
                const departureDetailModal = document.getElementById('departurePointDetailModal');
                if (departureDetailModal && departureDetailModal.querySelector('span').textContent === updatedData.maDKH) {
                    // Update departure point name
                    const nameElement = departureDetailModal.querySelector('h4');
                    if (nameElement) {
                        nameElement.textContent = updatedData.tenDKH;
                    }
                    
                    // Update address
                    const addressElement = departureDetailModal.querySelector('div:nth-child(2) span');
                    if (addressElement) {
                        addressElement.textContent = updatedData.diaChi;
                    }
                    
                    // Update phone number
                    const phoneElement = departureDetailModal.querySelector('div:nth-child(3) span');
                    if (phoneElement) {
                        phoneElement.textContent = updatedData.soDT;
                    }
                }
                break;
                
            case 5: // Destination
                updatedData = {
                    maDD: document.getElementById('edit_maDD').value,
                    tenDD: document.getElementById('edit_tenDD').value,
                    moTa: document.getElementById('edit_moTa').value,
                    // Note: in a real application, the image would be handled differently
                    // with file upload and storage. For this demo, we'll just handle text fields.
                    hinhAnh: document.getElementById('edit_hinhAnh').files.length > 0 
                        ? URL.createObjectURL(document.getElementById('edit_hinhAnh').files[0]) 
                        : null
                };
                
                // Create SQL (in real app would be done on server)
                const destinationSQL = `UPDATE DiemDen 
                                     SET TenDD = '${updatedData.tenDD}', 
                                         MoTa = '${updatedData.moTa}'
                                         ${updatedData.hinhAnh ? `, HinhAnh = '${updatedData.hinhAnh}'` : ''}
                                     WHERE MaDD = '${updatedData.maDD}'`;
                
                console.log("SQL would be: ", destinationSQL);
                
                // Find the destination in the table and update its display
                const destinationTable = document.querySelector('table');
                if (destinationTable) {
                    const rows = destinationTable.querySelectorAll('tbody tr');
                    
                    rows.forEach(row => {
                        const cells = row.cells;
                        // Map MaDD to the row
                        const rowMaDD = getDestinationCode(cells[0].textContent);
                        
                        // If this is the destination we just updated
                        if (rowMaDD === updatedData.maDD) {
                            // Update the row data
                            cells[0].textContent = updatedData.tenDD;
                            cells[1].textContent = updatedData.moTa;
                            
                            // Update image if a new one was selected
                            if (updatedData.hinhAnh) {
                                const imgElement = cells[2].querySelector('img');
                                if (imgElement) {
                                    imgElement.src = updatedData.hinhAnh;
                                    imgElement.alt = updatedData.tenDD;
                                }
                            }
                        }
                    });
                }
                
                // If a destination detail modal is open and showing this destination, update it as well
                const destinationDetailModal = document.getElementById('destinationDetailModal');
                if (destinationDetailModal && destinationDetailModal.querySelector('span').textContent === updatedData.maDD) {
                    // Update destination name
                    const nameElement = destinationDetailModal.querySelector('h4');
                    if (nameElement) {
                        nameElement.textContent = updatedData.tenDD;
                    }
                    
                    // Update description
                    const descriptionElement = destinationDetailModal.querySelector('div.mb-3 p');
                    if (descriptionElement) {
                        descriptionElement.textContent = updatedData.moTa;
                    }
                    
                    // Update image if a new one was selected
                    if (updatedData.hinhAnh) {
                        const imgElement = destinationDetailModal.querySelector('img');
                        if (imgElement) {
                            imgElement.src = updatedData.hinhAnh;
                            imgElement.alt = updatedData.tenDD;
                        }
                    }
                }
                break;
        }
        
        // Show success message
        alert(`Cập nhật thành công!`);
        
        // Hide modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
        modal.hide();
    }
}

// Helper function to get badge color based on status
function getBadgeColor(status) {
    switch(status) {
        case 'Đang mở bán': return 'success';
        case 'Sắp đủ': return 'warning text-dark';
        case 'Đã hết chỗ': return 'danger';
        case 'Mới mở': return 'info text-dark';
        case 'Chờ duyệt': return 'secondary';
        default: return 'primary';
    }
}

// Helper function to format date from YYYY-MM-DD to DD/MM/YYYY
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Helper function to format currency
function formatCurrency(amount) {
    return Number(amount).toLocaleString('vi-VN') + ' đ';
} 

// Function to show destination details in a modal
function showDestinationDetails(name, description, imagePath) {
    // Find matching destination code based on name
    const destinationCode = getDestinationCode(name);
    const associatedTours = getToursForDestination(name);
    
    // Create modal element
    const modalHTML = `
    <div class="modal fade" id="destinationDetailModal" tabindex="-1" aria-labelledby="destinationDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="destinationDetailModalLabel">Chi tiết điểm đến</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-4">
                        <div class="col-md-5">
                            <img src="${imagePath}" class="img-fluid rounded mb-3" alt="${name}" onerror="this.src='https://via.placeholder.com/400x300?text=Hình+ảnh+điểm+đến'">
                        </div>
                        <div class="col-md-7">
                            <h4 class="mb-3">${name}</h4>
                            <div class="mb-2">
                                <strong>Mã điểm đến:</strong>
                                <span>${destinationCode}</span>
                            </div>
                            <div class="mb-3">
                                <strong>Mô tả:</strong>
                                <p>${description}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-3">
                                <div class="card-header text-white" style="background-color: #637c94;">
                                    <h5 class="m-0">Tours đến điểm này</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group">
                                        ${associatedTours.map(tour => `
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                ${tour.name}
                                                <span class="badge bg-${getBadgeColor(tour.status)} rounded-pill">${tour.status}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-3">
                                <div class="card-header text-white" style="background-color: #637c94;">
                                    <h5 class="m-0">Lịch trình có điểm đến này</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group">
                                        ${getLichTrinhWithDestination(destinationCode).map(lichTrinh => `
                                            <li class="list-group-item">
                                                <strong>${lichTrinh.tenLT}</strong>
                                                <p class="mb-0">${lichTrinh.moTaLT}</p>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" id="editDestinationBtn" class="btn btn-primary">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Remove any existing modals
    const existingModal = document.getElementById('destinationDetailModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show the modal
    const modalElement = document.getElementById('destinationDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    
    // Add event listener to the edit button within the detail modal
    document.getElementById('editDestinationBtn').addEventListener('click', function() {
        // First hide the detail modal
        modal.hide();
        
        // Create a data object with the destination information
        const destinationData = {
            tenDD: name,
            moTa: description,
            hinhAnh: imagePath,
            maDD: destinationCode
        };
        
        // Show edit form with this data
        showEditForm(5, null, destinationData);
    });
}

// Function to get destination code from name
function getDestinationCode(name) {
    // This would normally query the database
    // Mock data based on schema
    const destinations = {
        'Vịnh Hạ Long': 'DD001',
        'Phố cổ Hội An': 'DD002',
        'Đảo Phú Quốc': 'DD003',
        'Núi Fansipan': 'DD004',
        'Bà Nà Hills': 'DD005',
        'Thành phố Đà Lạt': 'DD006'
    };
    
    return destinations[name] || 'Không xác định';
}

// Function to get tours associated with a destination
function getToursForDestination(name) {
    // This would normally query the database through joins to find all tours with the given destination
    // Mock data based on schema
    const destinationCode = getDestinationCode(name);
    
    // Based on our schema and mock data
    if (destinationCode === 'DD001') {
        return [
            { name: 'Vịnh Hạ Long - Quảng Ninh', status: 'Sắp đủ' }
        ];
    } else if (destinationCode === 'DD002') {
        return [
            { name: 'Đà Nẵng - Hội An - Huế', status: 'Mới mở' }
        ];
    } else if (destinationCode === 'DD003') {
        return [
            { name: 'Phú Quốc - Thiên đường biển đảo', status: 'Đã hết chỗ' }
        ];
    } else if (destinationCode === 'DD004') {
        return [
            { name: 'Sapa - Fansipan', status: 'Chờ duyệt' }
        ];
    } else if (destinationCode === 'DD006') {
        return [
            { name: 'Khám phá Đà Lạt', status: 'Đang mở bán' }
        ];
    }
    
    return [];
}

// Function to get LichTrinh entries with a specific destination
function getLichTrinhWithDestination(destinationCode) {
    // This would normally query the database through ChiTietLichTrinhDiemDen to find all LichTrinh associated with this destination
    // Mock data based on schema
    
    if (destinationCode === 'DD001') {
        return [
            { tenLT: 'Ngày 1 Hạ Long', moTaLT: 'Khởi hành đến Hạ Long' },
            { tenLT: 'Ngày 2 Hạ Long', moTaLT: 'Khám phá vịnh Hạ Long' }
        ];
    } else if (destinationCode === 'DD006') {
        return [
            { tenLT: 'Ngày 1 Đà Lạt', moTaLT: 'Khởi hành và tham quan thành phố' },
            { tenLT: 'Ngày 2 Đà Lạt', moTaLT: 'Tham quan các điểm du lịch' },
            { tenLT: 'Ngày 3 Đà Lạt', moTaLT: 'Kết thúc tour' }
        ];
    }
    
    return [];
}

// Function to save the tour
function saveTour() {
    // Get form values
    const tenTour = document.getElementById('tourName').value;
    const soNgay = document.getElementById('tourDays').value;
    const soDem = document.getElementById('tourNights').value;
    const giaTour = document.getElementById('tourPrice').value;
    const loaiTour = document.getElementById('tourType').value;
    const trangThai = document.getElementById('tourStatus').value;
    const moTa = document.getElementById('tourDescription').value;
    const maxCapacity = document.getElementById('maxCapacity').value;
    
    // Validate required fields
    if (!tenTour || !soNgay || !soDem || !giaTour || !loaiTour || !maxCapacity) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
        return;
    }
    
    // Get all date pairs
    const datePairs = [];
    const allDatePairs = document.querySelectorAll('.date-pair');
    allDatePairs.forEach((pair, index) => {
        const startDate = pair.querySelector('.startDate').value;
        const endDate = pair.querySelector('.endDate').value;
        const departureTime = pair.querySelector('.departureTime').value;
        const gatheringTime = pair.querySelector('.gatheringTime').value;
        const departureLocation = pair.querySelector('.departureLocation').value;
        
        if (startDate && endDate) {
            datePairs.push({
                startDate: startDate,
                endDate: endDate,
                departureTime: departureTime,
                gatheringTime: gatheringTime,
                departureLocation: departureLocation,
                tripNumber: index + 1
            });
        }
    });
    
    if (datePairs.length === 0) {
        alert('Vui lòng nhập ít nhất một cặp ngày khởi hành và kết thúc!');
        return;
    }
    
    // Get the selected services
    const selectedServices = [];
    document.querySelectorAll('input[type="checkbox"][id^="service"]:checked').forEach(checkbox => {
        selectedServices.push(checkbox.value);
    });
    
    // Collect itinerary data
    const lichTrinh = [];
    const scheduleContainer = document.getElementById('scheduleContainer');
    const daySchedules = scheduleContainer.querySelectorAll('.day-schedule');
    
    daySchedules.forEach((day, index) => {
        const dayNumber = index + 1;
        const title = day.querySelector(`input[name="day_title_${dayNumber}"]`).value || `Ngày ${dayNumber}`;
        const morning = day.querySelector(`textarea[name="morning_${dayNumber}"]`).value || '';
        const noon = day.querySelector(`textarea[name="noon_${dayNumber}"]`).value || '';
        const afternoon = day.querySelector(`textarea[name="afternoon_${dayNumber}"]`).value || '';
        const evening = day.querySelector(`textarea[name="evening_${dayNumber}"]`).value || '';
        
        lichTrinh.push({
            ngay: dayNumber,
            title: title,
            morning: morning,
            noon: noon,
            afternoon: afternoon,
            evening: evening
        });
    });
    
    // Get file uploads (if any)
    const mainImageInput = document.getElementById('tourMainImage');
    const subImagesInput = document.getElementById('tourSubImages');
    
    let mainImageFile = null;
    if (mainImageInput.files.length > 0) {
        mainImageFile = mainImageInput.files[0];
    }
    
    const subImageFiles = [];
    if (subImagesInput.files.length > 0) {
        for (let i = 0; i < subImagesInput.files.length; i++) {
            subImageFiles.push(subImagesInput.files[i]);
        }
    }
    
    // In a real application, you would send this data to the server
    // For demonstration, we'll display some information and add to the table
    console.log('Tour data collected:', {
        tenTour,
        soNgay,
        soDem,
        giaTour,
        loaiTour,
        trangThai,
        moTa,
        maxCapacity,
        datePairs,
        selectedServices,
        lichTrinh,
        mainImageFile,
        subImageFiles
    });
    
    // Prepare data for adding to the table
    const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giaTour);
    
    // Add a new row to the table
    addTourToTable(tenTour, soNgay, soDem, formattedPrice, loaiTour, trangThai);
    
    // Close the modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addTourModal'));
    modal.hide();
    
    // Show success message
    alert('Tour đã được thêm thành công!');
}

// Function to highlight a newly added row
function highlightNewRow(row) {
    row.style.animation = 'highlight-row 2s';
    
    // Add a style for the animation if it doesn't exist
    if (!document.getElementById('highlight-row-style')) {
        const style = document.createElement('style');
        style.id = 'highlight-row-style';
        style.textContent = `
            @keyframes highlight-row {
                0% { background-color: rgba(58, 67, 168, 0.2); }
                100% { background-color: transparent; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Function to update tour statistics in the quick menu
function updateTourStats() {
    const tourTable = document.querySelector('#dynamic-content table tbody');
    if (!tourTable) return;
    
    const totalTours = tourTable.querySelectorAll('tr').length;
    const activeTours = Array.from(tourTable.querySelectorAll('tr')).filter(row => 
        row.querySelector('.badge').textContent.includes('Đang mở bán') || 
        row.querySelector('.badge').textContent.includes('Mới mở')
    ).length;
    
    // Update the statistics in the quick menu
    const statsElements = document.querySelectorAll('.tour-quick-menu .stat-count');
    if (statsElements.length >= 2) {
        statsElements[0].textContent = totalTours;
        statsElements[1].textContent = activeTours;
    }
}


