<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图稿编号管理系统 - 管理员</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            background: linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 30%, #E8F5E9 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .header {
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 16px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            border-left: 5px solid #66BB6A;
        }
        .header h1 {
            color: #2E7D32;
            font-size: 24px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        .header p {
            color: #F57C00;
            font-size: 13px;
        }
        .nav-buttons {
            display: flex;
            gap: 10px;
            margin-top: 16px;
            flex-wrap: wrap;
        }
        .nav-btn {
            padding: 10px 20px;
            background: #66BB6A;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(102, 187, 106, 0.3);
        }
        .nav-btn:hover {
            background: #4CAF50;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 187, 106, 0.4);
        }
        .nav-btn.active {
            background: #43A047;
            box-shadow: 0 4px 12px rgba(67, 160, 71, 0.4);
        }
        .content-section {
            background: white;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 16px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            border-left: 5px solid #FFB74D;
        }
        .hidden { display: none; }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            color: #F57C00;
            font-weight: 600;
            margin-bottom: 8px;
            font-size: 15px;
            display: block;
        }
        .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            border: 2px solid #C8E6C9;
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            background: #F1F8E9;
        }
        .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: #66BB6A;
            background: white;
            box-shadow: 0 0 0 3px rgba(102, 187, 106, 0.1);
        }
        .hint {
            font-size: 12px;
            color: #388E3C;
            margin-top: 4px;
        }
        .btn {
            padding: 14px 28px;
            background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(102, 187, 106, 0.3);
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(102, 187, 106, 0.4);
        }
        .btn-secondary {
            background: linear-gradient(135deg, #FFB74D 0%, #FFA726 100%);
            box-shadow: 0 4px 12px rgba(255, 183, 77, 0.3);
        }
        .btn-danger {
            background: linear-gradient(135deg, #EF5350 0%, #E57373 100%);
            box-shadow: 0 4px 12px rgba(239, 83, 80, 0.3);
        }
        .btn-small {
            padding: 8px 16px;
            font-size: 13px;
        }
        .result-box {
            background: linear-gradient(135deg, #FFE08A 0%, #FFD54F 100%);
            border: 2px solid #FFB300;
            border-radius: 10px;
            padding: 24px;
            margin-top: 20px;
            display: none;
            box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
        }
        .result-box.show {
            display: block;
            animation: slideIn 0.4s ease;
        }
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .result-code {
            font-size: 26px;
            font-weight: 700;
            color: #F57C00;
            background: white;
            padding: 18px;
            border-radius: 8px;
            margin: 16px 0;
            word-break: break-all;
            text-align: center;
            border: 2px solid #FFB300;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #E8F5E9;
        }
        th {
            background: linear-gradient(135deg, #FFE08A 0%, #FFD54F 100%);
            font-weight: 600;
            color: #F57C00;
            font-size: 13px;
        }
        tr:hover {
            background: #FFFDE7;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }
        .stat-card {
            background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
            color: white;
            padding: 24px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(102, 187, 106, 0.3);
        }
        .stat-number {
            font-size: 36px;
            font-weight: 700;
            margin: 10px 0;
        }
        .stat-label {
            font-size: 14px;
            opacity: 0.95;
        }
        .preview-box {
            background: linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%);
            border: 2px solid #FFB300;
            border-radius: 10px;
            padding: 18px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
        }
        .preview-title {
            color: #F57C00;
            font-weight: 700;
            margin-bottom: 12px;
            font-size: 16px;
        }
        .preview-code {
            font-size: 22px;
            font-weight: 700;
            color: #F57C00;
            text-align: center;
            padding: 14px;
            background: white;
            border-radius: 8px;
            border: 2px solid #FFB300;
        }
        .info-box {
            background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
            border-left: 4px solid #66BB6A;
            padding: 18px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(102, 187, 106, 0.2);
        }
        .info-box h3 {
            color: #2E7D32;
            margin-bottom: 12px;
            font-size: 17px;
            font-weight: 700;
        }
        .info-box ul {
            margin-left: 24px;
            color: #388E3C;
            font-size: 14px;
        }
        .info-box li {
            margin-bottom: 8px;
        }
        .pagination-controls {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .page-size-selector {
            padding: 8px;
            border: 1px solid #C8E6C9;
            border-radius: 6px;
            font-size: 14px;
        }
        .pagination-info {
            color: #66BB6A;
            font-size: 14px;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .nav-buttons {
                flex-direction: column;
            }
            .stats {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎨 图稿编号管理系统 - 管理员控制台</h1>
        <p style="margin-top: 6px;">您可以生成编号并查看所有历史数据和真实姓名</p>
        <div class="nav-buttons">
            <button class="nav-btn active" onclick="showSection('generate')">📝 生成编号</button>
            <button class="nav-btn" onclick="showSection('history')">📋 历史记录</button>
            <button class="nav-btn" onclick="showSection('stats')">📊 统计数据</button>
            <button class="nav-btn" onclick="showSection('settings')">⚙️ 系统设置</button>
        </div>
    </div>

    <div id="generate-section" class="content-section">
        <h2 style="margin-bottom: 20px; color: #F57C00; font-size: 22px;">📝 生成新编号</h2>
        <div class="info-box">
            <h3>💡 使用说明</h3>
            <ul>
                <li><strong>姓名原样显示</strong>：输入什么显示什么（张三三就显示张三三）</li>
                <li><strong>流水号规则</strong>：同一人名一年内从01-99顺延排序</li>
                <li><strong>日期自动读取</strong>：系统自动获取当天日期</li>
                <li><strong>编号唯一性</strong>：每条编号都是唯一的，不会重复</li>
            </ul>
        </div>
        <div class="form-group">
            <label>🏢 部门选择</label>
            <select id="deptSelect" onchange="updateCodePreview()">
                <option value="">请选择部门</option>
            </select>
        </div>
        <div class="form-group">
            <label>👤 您的姓名</label>
            <input type="text" id="realName" placeholder="例如：张三三 或 John Smith" oninput="updateCodePreview()">
            <div class="hint">输入什么姓名就显示什么姓名，原样显示</div>
        </div>
        <div class="form-group">
            <label>📄 图纸名称</label>
            <input type="text" id="drawingName" placeholder="例如：三对自粘底托" oninput="updateCodePreview()">
            <div class="hint">请输入具体的产品或图纸名称</div>
        </div>
        <div class="form-group">
            <label>📝 备注说明（可选）</label>
            <input type="text" id="notes" placeholder="例如：客户样品、紧急订单">
        </div>
        <div class="preview-box">
            <div class="preview-title">👁️ 编号预览</div>
            <div class="preview-code" id="final-preview">请填写完整信息后查看预览</div>
        </div>
        <button class="btn" onclick="generateCode()">✅ 生成编号并保存</button>
        <div id="result-box" class="result-box">
            <h3 style="color: #2E7D32; margin-bottom: 16px; text-align: center; font-size: 20px;">🎉 编号生成成功！</h3>
            <div class="result-code" id="result-code"></div>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button class="btn" onclick="copyCode()">📋 复制编号</button>
                <button class="btn btn-secondary" onclick="resetForm()">🔄 继续生成</button>
            </div>
        </div>
    </div>

    <div id="history-section" class="content-section hidden">
        <h2 style="margin-bottom: 20px; color: #F57C00; font-size: 22px;">📋 所有编号记录</h2>
        <div style="margin-bottom: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-small" onclick="exportToExcel()">📊 导出为Excel</button>
            <button class="btn btn-secondary btn-small" onclick="exportData()">💾 导出为JSON</button>
            <button class="btn btn-danger btn-small" onclick="clearAllData()">🗑️ 清空所有数据</button>
            <button class="btn btn-secondary btn-small" onclick="loadHistory()">🔄 刷新列表</button>
        </div>
        <div style="overflow-x: auto;">
            <table id="history-table">
                <thead>
                    <tr>
                        <th width="50">序号</th>
                        <th>完整编号</th>
                        <th>姓名</th>
                        <th>部门</th>
                        <th>图纸名称</th>
                        <th>备注</th>
                        <th>生成时间</th>
                    </tr>
                </thead>
                <tbody id="history-tbody"></tbody>
            </table>
        </div>
        <div class="pagination-controls">
            <select id="page-size" class="page-size-selector" onchange="loadHistory()">
                <option value="10">每页10条</option>
                <option value="50">每页50条</option>
                <option value="100">每页100条</option>
                <option value="999999">全部显示</option>
            </select>
            <div id="history-info" class="pagination-info"></div>
        </div>
    </div>

    <div id="stats-section" class="content-section hidden">
        <h2 style="margin-bottom: 20px; color: #F57C00; font-size: 22px;">📊 数据统计</h2>
        <div class="stats">
            <div class="stat-card">
                <div class="stat-label">总编号数</div>
                <div class="stat-number" id="total-count">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">今年编号数</div>
                <div class="stat-number" id="year-count">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">今日编号数</div>
                <div class="stat-number" id="today-count">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">活跃用户数</div>
                <div class="stat-number" id="user-count">0</div>
            </div>
        </div>
        <div style="margin-top: 28px;">
            <h3 style="color: #F57C00; margin-bottom: 16px; font-size: 20px;">部门统计</h3>
            <table id="dept-stats-table">
                <thead>
                    <tr>
                        <th>部门</th>
                        <th>编号数量</th>
                        <th>占比</th>
                    </tr>
                </thead>
                <tbody id="dept-stats-tbody"></tbody>
            </table>
        </div>
    </div>

    <div id="settings-section" class="content-section hidden">
        <h2 style="margin-bottom: 20px; color: #F57C00; font-size: 22px;">⚙️ 系统设置</h2>
        <div style="margin-bottom: 28px;">
            <h3 style="margin-bottom: 16px; color: #F57C00; font-size: 18px;">数据管理</h3>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <button class="btn btn-secondary" onclick="exportData()">💾 导出所有数据</button>
                <button class="btn btn-secondary" onclick="importData()">📥 导入数据</button>
                <button class="btn btn-danger" onclick="clearAllData()">🗑️ 清空所有数据</button>
            </div>
            <input type="file" id="import-file" style="display: none;" accept=".json" onchange="handleImport(event)">
        </div>
    </div>

    <script>
        const CONFIG = {
            storageKeys: {
                codes: 'drawing_codes_all',
                departments: 'drawing_departments'
            },
            departments: {
                'CY': '创研',
                'W1': '外一',
                'W2': '外二',
                'W3': '外三',
                'YY': '运营',
                'NX': '内销',
                'XG': '销管',
                'SJ': '设计',
                'CG': '采购'
            }
        };

        function saveDepartments() {
            localStorage.setItem(CONFIG.storageKeys.departments, JSON.stringify(CONFIG.departments));
        }

        function getTodayKey() {
            const now = new Date();
            return now.getFullYear() +
                   String(now.getMonth() + 1).padStart(2, '0') +
                   String(now.getDate()).padStart(2, '0');
        }

        function getYearKey() {
            const now = new Date();
            return now.getFullYear();
        }

        function getAllCodes() {
            return JSON.parse(localStorage.getItem(CONFIG.storageKeys.codes) || '[]');
        }

        function saveAllCodes(codes) {
            localStorage.setItem(CONFIG.storageKeys.codes, JSON.stringify(codes));
        }

        function generateCode() {
            const dept = document.getElementById('deptSelect').value;
            const realName = document.getElementById('realName').value.trim();
            const drawingName = document.getElementById('drawingName').value.trim();
            const notes = document.getElementById('notes').value.trim();

            if (!dept) { alert('请选择部门'); return; }
            if (!realName) { alert('请填写您的姓名'); return; }
            if (!drawingName) { alert('请填写图纸名称'); return; }

            const yearKey = getYearKey();
            const userKey = dept + '-' + realName + '-' + yearKey;

            let allCodes = getAllCodes();
            const userYearCodes = allCodes.filter(code => code.userKey === userKey);
            const serialNumber = String(userYearCodes.length + 1).padStart(2, '0');

            const today = getTodayKey();
            const fullCode = `${dept}-${realName}${today}${serialNumber}-${drawingName}`;

            const record = {
                id: Date.now(),
                fullCode: fullCode,
                realName: realName,
                dept: dept,
                drawingName: drawingName,
                notes: notes,
                userKey: userKey,
                serialNumber: serialNumber,
                createdAt: new Date().toLocaleString('zh-CN'),
                yearKey: yearKey,
                todayKey: today
            };

            allCodes.push(record);
            saveAllCodes(allCodes);

            document.getElementById('result-code').textContent = fullCode;
            document.getElementById('result-box').classList.add('show');
            document.getElementById('result-box').scrollIntoView({ behavior: 'smooth' });
        }

        function copyCode() {
            const code = document.getElementById('result-code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                alert('编号已复制到剪贴板！');
            });
        }

        function resetForm() {
            document.getElementById('drawingName').value = '';
            document.getElementById('notes').value = '';
            document.getElementById('result-box').classList.remove('show');
            document.getElementById('final-preview').textContent = '请填写完整信息后查看预览';
            document.getElementById('realName').focus();
        }

        function updateCodePreview() {
            const dept = document.getElementById('deptSelect').value;
            const realName = document.getElementById('realName').value.trim();
            const drawingName = document.getElementById('drawingName').value.trim();

            if (dept && realName && drawingName) {
                const today = getTodayKey();
                const previewCode = `${dept}-${realName}${today}01-${drawingName}`;
                document.getElementById('final-preview').textContent = previewCode;
            } else {
                document.getElementById('final-preview').textContent = '请填写完整信息后查看预览';
            }
        }

        function loadHistory() {
            const allCodes = getAllCodes();
            const tbody = document.getElementById('history-tbody');
            const pageSizeSelect = document.getElementById('page-size');
            const pageSize = parseInt(pageSizeSelect.value);

            // 按时间倒序排列（最新的在前面）
            allCodes.sort((a, b) => b.id - a.id);

            // 根据每页显示数量截取数据
            const endIndex = pageSize === 999999 ? allCodes.length : pageSize;
            const codesToShow = allCodes.slice(0, endIndex);

            if (codesToShow.length === 0) {
                tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: #66BB6A; padding: 32px; font-size: 15px;">暂无记录</td></tr>';
                document.getElementById('history-info').textContent = '共 0 条记录';
                return;
            }

            tbody.innerHTML = codesToShow.map((code, index) => {
                return `
                    <tr>
                        <td><strong>${index + 1}</strong></td>
                        <td style="font-weight: 700; color: #F57C00;">${code.fullCode}</td>
                        <td>${code.realName}</td>
                        <td>${code.dept} - ${CONFIG.departments[code.dept]}</td>
                        <td>${code.drawingName}</td>
                        <td style="font-size: 13px; color: #666;">${code.notes || '-'}</td>
                        <td style="font-size: 13px; color: #666;">${code.createdAt}</td>
                    </tr>
                `;
            }).join('');

            if (pageSize === 999999) {
                document.getElementById('history-info').textContent = `共 ${allCodes.length} 条记录`;
            } else {
                document.getElementById('history-info').textContent = `显示 1-${endIndex} 条，共 ${allCodes.length} 条`;
            }
        }

        function loadStats() {
            const allCodes = getAllCodes();
            const today = getTodayKey();
            const yearKey = getYearKey();

            const todayCodes = allCodes.filter(code => code.todayKey === today);
            const yearCodes = allCodes.filter(code => code.yearKey === yearKey);
            const uniqueUsers = new Set(allCodes.map(code => code.realName));

            document.getElementById('total-count').textContent = allCodes.length;
            document.getElementById('year-count').textContent = yearCodes.length;
            document.getElementById('today-count').textContent = todayCodes.length;
            document.getElementById('user-count').textContent = uniqueUsers.size;

            const deptStats = {};
            allCodes.forEach(code => {
                deptStats[code.dept] = (deptStats[code.dept] || 0) + 1;
            });

            const deptTbody = document.getElementById('dept-stats-tbody');
            deptTbody.innerHTML = Object.entries(deptStats)
                .sort((a, b) => b[1] - a[1])
                .map(([dept, count]) => {
                    const percentage = allCodes.length > 0 ? ((count / allCodes.length) * 100).toFixed(1) : 0;
                    return `
                        <tr>
                            <td>${dept} - ${CONFIG.departments[dept]}</td>
                            <td><strong>${count}</strong></td>
                            <td>
                                <div style="background: #FFE0B2; border-radius: 6px; overflow: hidden; height: 22px;">
                                    <div style="background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%); width: ${percentage}%; height: 100%;"></div>
                                </div>
                                <small style="color: #F57C00; font-weight: 600;">${percentage}%</small>
                            </td>
                        </tr>
                    `;
                }).join('');
        }

        function exportToExcel() {
            const allCodes = getAllCodes();

            if (allCodes.length === 0) {
                alert('没有数据可导出');
                return;
            }

            let excelContent = '\uFEFF';
            excelContent += '序号\t完整编号\t姓名\t部门\t图纸名称\t备注\t生成时间\n';

            allCodes.sort((a, b) => b.id - a.id).forEach((code, index) => {
                excelContent += `${index + 1}\t${code.fullCode}\t${code.realName}\t${code.dept} - ${CONFIG.departments[code.dept]}\t${code.drawingName}\t${code.notes || ''}\t${code.createdAt}\n`;
            });

            const blob = new Blob([excelContent], { type: 'application/vnd.ms-excel' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `图稿编号数据_${getTodayKey()}.xls`;
            a.click();
        }

        function exportData() {
            const data = {
                codes: getAllCodes(),
                departments: CONFIG.departments,
                exportDate: new Date().toLocaleString('zh-CN')
            };

            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `图稿编号备份_${getTodayKey()}.json`;
            a.click();
        }

        function importData() {
            document.getElementById('import-file').click();
        }

        function handleImport(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);

                    if (confirm('确定要导入数据吗？这将覆盖现有数据。')) {
                        if (data.codes) saveAllCodes(data.codes);
                        if (data.departments) {
                            localStorage.setItem(CONFIG.storageKeys.departments, JSON.stringify(data.departments));
                        }

                        alert('数据导入成功！');
                        location.reload();
                    }
                } catch (error) {
                    alert('数据文件格式错误');
                }
            };
            reader.readAsText(file);
        }

        function clearAllData() {
            if (confirm('确定要清空所有数据吗？此操作不可恢复！')) {
                localStorage.removeItem(CONFIG.storageKeys.codes);
                localStorage.removeItem(CONFIG.storageKeys.departments);
                saveDepartments();
                location.reload();
            }
        }

        function showSection(section) {
            document.querySelectorAll('.content-section').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

            document.getElementById(section + '-section').classList.remove('hidden');
            event.target.classList.add('active');

            if (section === 'history') loadHistory();
            if (section === 'stats') loadStats();
        }

        window.onload = function() {
            saveDepartments();

            const deptSelect = document.getElementById('deptSelect');

            const deptOptions = Object.entries(CONFIG.departments).map(([code, name]) =>
                `<option value="${code}">${code} - ${name}</option>`
            ).join('');

            deptSelect.innerHTML = '<option value="">请选择部门</option>' + deptOptions;

            document.getElementById('drawingName').addEventListener('input', updateCodePreview);
            document.getElementById('deptSelect').addEventListener('change', updateCodePreview);
            document.getElementById('realName').addEventListener('input', updateCodePreview);

            document.getElementById('notes').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') generateCode();
            });
            document.getElementById('drawingName').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') document.getElementById('notes').focus();
            });
            document.getElementById('realName').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') document.getElementById('drawingName').focus();
            });
        };
    </script>
</body>
</html>
