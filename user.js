<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图稿编号生成器</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            background: linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 30%, #E8F5E9 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            padding: 36px;
            max-width: 580px;
            width: 100%;
            border-left: 5px solid #66BB6A;
        }
        h1 {
            text-align: center;
            color: #2E7D32;
            margin-bottom: 8px;
            font-size: 26px;
            font-weight: 700;
        }
        .subtitle {
            text-align: center;
            color: #F57C00;
            margin-bottom: 28px;
            font-size: 14px;
            font-weight: 500;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #F57C00;
            font-weight: 600;
            font-size: 15px;
        }
        input, select {
            width: 100%;
            padding: 12px;
            border: 2px solid #C8E6C9;
            border-radius: 8px;
            font-size: 15px;
            transition: all 0.3s ease;
            background: #F1F8E9;
        }
        input:focus, select:focus {
            outline: none;
            border-color: #66BB6A;
            background: white;
            box-shadow: 0 0 0 3px rgba(102, 187, 106, 0.1);
        }
        .hint {
            font-size: 12px;
            color: #388E3C;
            margin-top: 6px;
        }
        .btn {
            width: 100%;
            padding: 14px;
            background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 17px;
            font-weight: 700;
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
        .result-container {
            margin-top: 28px;
            padding: 24px;
            background: linear-gradient(135deg, #FFE08A 0%, #FFD54F 100%);
            border-radius: 10px;
            border: 2px solid #FFB300;
            display: none;
            box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
        }
        .result-container.show {
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
        .result-label {
            color: #2E7D32;
            font-size: 15px;
            margin-bottom: 12px;
            font-weight: 600;
            text-align: center;
        }
        .result-code {
            font-size: 24px;
            font-weight: 700;
            color: #F57C00;
            background: white;
            padding: 18px;
            border-radius: 8px;
            margin-bottom: 16px;
            word-break: break-all;
            text-align: center;
            border: 2px solid #FFB300;
        }
        .copy-btn {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 187, 106, 0.3);
        }
        .copy-btn:hover {
            box-shadow: 0 6px 16px rgba(102, 187, 106, 0.4);
        }
        .info-box {
            background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
            border-left: 4px solid #66BB6A;
            padding: 18px;
            margin-top: 28px;
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
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 图稿编号生成器</h1>
        <p class="subtitle">简单、快速、专业的编号生成工具</p>

        <div class="form-group">
            <label for="deptSelect">🏢 所属部门</label>
            <select id="deptSelect">
                <option value="">请选择部门</option>
            </select>
        </div>

        <div class="form-group">
            <label for="realName">👤 您的姓名</label>
            <input type="text" id="realName" placeholder="例如：张三三 或 John Smith">
            <div class="hint">输入什么姓名就显示什么姓名，原样显示</div>
        </div>

        <div class="form-group">
            <label for="drawingName">📄 图纸名称</label>
            <input type="text" id="drawingName" placeholder="例如：三对自粘底托">
            <div class="hint">请输入具体的产品或图纸名称</div>
        </div>

        <button class="btn" onclick="generateCode()">✅ 生成编号</button>

        <div class="result-container" id="resultContainer">
            <h3 style="color: #2E7D32; margin-bottom: 16px; text-align: center; font-size: 20px;">✨ 编号生成成功！</h3>
            <div class="result-label">您的唯一编号：</div>
            <div class="result-code" id="resultCode"></div>
            <div style="display: flex; gap: 12px; justify-content: center;">
                <button class="copy-btn" id="copyBtn" onclick="copyCode()">📋 复制编号</button>
                <button class="copy-btn btn-secondary" onclick="resetForm()">🔄 继续生成</button>
            </div>
            <div style="text-align: center; margin-top: 16px; color: #66BB6A; font-size: 13px; font-weight: 500;">
                生成时间：<span id="generateTime"></span>
            </div>
        </div>

        <div class="info-box">
            <h3>📖 使用说明</h3>
            <ul>
                <li>选择您所在的部门</li>
                <li>输入您的姓名（输入什么就显示什么）</li>
                <li>输入图纸名称后点击生成</li>
                <li>生成的编号可以一键复制</li>
                <li>系统自动确保编号唯一性</li>
                <li>同一人名一年内流水号从01-99顺延</li>
            </ul>
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

        function getDepartments() {
            const stored = localStorage.getItem(CONFIG.storageKeys.departments);
            if (stored) {
                return JSON.parse(stored);
            }
            saveDepartments();
            return CONFIG.departments;
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

        function generateCode() {
            const dept = document.getElementById('deptSelect').value;
            const realName = document.getElementById('realName').value.trim();
            const drawingName = document.getElementById('drawingName').value.trim();

            if (!dept) { alert('请选择部门'); return; }
            if (!realName) { alert('请输入您的姓名'); return; }
            if (!drawingName) { alert('请输入图纸名称'); return; }

            const yearKey = getYearKey();
            const userKey = dept + '-' + realName + '-' + yearKey;

            let allCodes = JSON.parse(localStorage.getItem(CONFIG.storageKeys.codes) || '[]');
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
                userKey: userKey,
                serialNumber: serialNumber,
                createdAt: new Date().toLocaleString('zh-CN'),
                yearKey: yearKey,
                todayKey: today
            };

            allCodes.push(record);
            localStorage.setItem(CONFIG.storageKeys.codes, JSON.stringify(allCodes));

            document.getElementById('resultCode').textContent = fullCode;
            document.getElementById('generateTime').textContent = record.createdAt;
            document.getElementById('resultContainer').classList.add('show');

            document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });

            const copyBtn = document.getElementById('copyBtn');
            copyBtn.textContent = '📋 复制编号';
        }

        function copyCode() {
            const code = document.getElementById('resultCode').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const copyBtn = document.getElementById('copyBtn');
                copyBtn.textContent = '✅ 已复制！';
                setTimeout(() => {
                    copyBtn.textContent = '📋 复制编号';
                }, 2000);
            });
        }

        function resetForm() {
            document.getElementById('drawingName').value = '';
            document.getElementById('resultContainer').classList.remove('show');
            document.getElementById('realName').focus();
        }

        window.onload = function() {
            saveDepartments();

            const depts = getDepartments();
            const deptSelect = document.getElementById('deptSelect');
            deptSelect.innerHTML = '<option value="">请选择部门</option>' +
                Object.entries(depts).map(([code, name]) =>
                    `<option value="${code}">${code} - ${name}</option>`
                ).join('');

            document.getElementById('drawingName').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') generateCode();
            });
            document.getElementById('realName').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') document.getElementById('drawingName').focus();
            });
        };
    </script>
</body>
</html>
