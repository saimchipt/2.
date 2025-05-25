// ระบบยศ
const ranksSystem = {
    ranks: [
        { id: 1, name: "พนักงานขาย", level: 1, deletable: false },
        { id: 2, name: "หัวหน้าพนักงาน", level: 2, deletable: true },
        { id: 3, name: "ผู้จัดการสาขา", level: 3, deletable: true }
    ],

    // แสดงรายการยศทั้งหมด
    displayRanks: function() {
        const ranksList = document.getElementById('ranks-list');
        ranksList.innerHTML = '';

        this.ranks.forEach(rank => {
            const rankItem = document.createElement('div');
            rankItem.className = 'rank-item';
            rankItem.innerHTML = `
                <span>${rank.name} (ระดับ ${rank.level})</span>
                ${rank.deletable ? `<button onclick="ranksSystem.deleteRank(${rank.id})">ลบ</button>` : ''}
            `;
            ranksList.appendChild(rankItem);
        });
    },

    // เพิ่มยศใหม่
    addRank: function() {
        const rankName = document.getElementById('new-rank-name').value;
        const rankLevel = document.getElementById('new-rank-level').value;

        if (rankName && rankLevel) {
            const newRank = {
                id: this.ranks.length + 1,
                name: rankName,
                level: parseInt(rankLevel),
                deletable: true
            };

            this.ranks.push(newRank);
            this.displayRanks();
            document.getElementById('new-rank-name').value = '';
            document.getElementById('new-rank-level').value = '';
        }
    },

    // ลบยศ
    deleteRank: function(id) {
        this.ranks = this.ranks.filter(rank => rank.id !== id);
        this.displayRanks();
    }
};

// เรียกใช้เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    ranksSystem.displayRanks();
});
