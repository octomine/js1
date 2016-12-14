var cellSide = 50;
var padding = 20;

function init() {
	var chessPieces = {
		"A8":"&#9820;",
		"H8":"&#9820;",
		"B8":"&#9822;",
		"G8":"&#9822;",
		"C8":"&#9821;",
		"F8":"&#9821;",
		"D8":"&#9819;",
		"E8":"&#9818;",
		"A7":"&#9823;",
		"B7":"&#9823;",
		"C7":"&#9823;",
		"D7":"&#9823;",
		"E7":"&#9823;",
		"F7":"&#9823;",
		"G7":"&#9823;",
		"H7":"&#9823;",
		"A1":"&#9814;",
		"H1":"&#9814;",
		"B1":"&#9816;",
		"G1":"&#9816;",
		"C1":"&#9815;",
		"F1":"&#9815;",
		"D1":"&#9813;",
		"E1":"&#9812;",
		"A2":"&#9817;",
		"B2":"&#9817;",
		"C2":"&#9817;",
		"D2":"&#9817;",
		"E2":"&#9817;",
		"F2":"&#9817;",
		"G2":"&#9817;",
		"H2":"&#9817;"
	};
	
	var chessBoard = document.getElementById('chessBoard');
	chessBoard.style.padding = padding + 'px';
	
	var chessBoardTable = document.createElement('div');
	chessBoardTable.className = 'chess-board-table';
	chessBoardTable.style.width = 8 * cellSide + 'px';
	chessBoardTable.style.height = 8 * cellSide + 'px';
	chessBoard.appendChild(chessBoardTable);
	
	for(var i = 0; i < 8; i ++) {
		for(var j = 0; j < 8; j ++) {
			var cell = document.createElement('div');
			cell.id = String.fromCharCode(65 + j) + (8 - i);
			cell.className = (i + j) % 2 == 0 ? 'cell-white' : 'cell-black';
			cell.style.width = cell.style.height = cellSide + 'px';
			cell.style.left = cellSide * j + 'px';
			cell.style.top = cellSide * i + 'px';
			if(chessPieces[cell.id]) cell.innerHTML = chessPieces[cell.id];
			chessBoardTable.appendChild(cell);
		}
	}
	
	for(i = 1; i < 9; i ++) {
		var cn = document.createElement('div');
		cn.innerText = i;
		cn.className = 'letter';
		chessBoardTable.appendChild(cn);
		cn.style.left = - (padding + cn.clientWidth) / 2 - 1 + 'px';
		cn.style.top = chessBoardTable.clientHeight - i * cellSide + (cellSide - cn.clientHeight) / 2 + 'px';
		
		var cl = document.createElement('div');
		cl.innerText = String.fromCharCode(64 + i);
		cl.className = 'letter';
		chessBoardTable.appendChild(cl);
		cl.style.left = (i - 1) * cellSide + (cellSide - cl.clientWidth) / 2 + 'px';
		cl.style.top = 1 + chessBoardTable.clientHeight + (padding - cl.clientHeight) / 2 + 'px';
	}
}
