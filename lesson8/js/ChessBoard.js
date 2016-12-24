function ChessBoard(el) {
	var selectedCell;
	var struct = {};
	
	var coordLeft = document.createElement('div');
	coordLeft.className = 'coordinates-left';
	el.appendChild(coordLeft);
	
	var table = document.createElement('div');
	table.className = 'chess-board-table';
	el.appendChild(table);
	
	for(var i = 0; i < 8; i ++) {
		for(var j = 0; j < 8; j ++) {
			var cell = document.createElement('div');
			cell.id = String.fromCharCode(65 + j) + (8 - i);
			cell.classList.add((i + j) % 2 == 0 ? 'cell-white' : 'cell-black', 'cell');
			table.appendChild(cell);
		}
	}
	
	var coordBottom = document.createElement('div');
	coordBottom.className = 'coordinates-bottom';
	el.appendChild(coordBottom);
	
	for(i = 1; i < 9; i ++) {
		var cn = document.createElement('div');
		cn.innerText = i;
		cn.className = 'letter';
		coordLeft.appendChild(cn);
		
		var cl = document.createElement('div');
		cl.innerText = String.fromCharCode(64 + i);
		cl.className = 'letter';
		coordBottom.appendChild(cl);
	}
	
	this.addEventListener = function (evt, callback) {
		switch (evt) {
			case 'click':
				table.onclick = function(e) {
					e.stopPropagation();
					callback({cell:e.target.id});
				}
				break;
		}
	}
	
	this.setSelectedCell = function (cell) {
		if(selectedCell) document.getElementById(selectedCell).classList.toggle('cell-selected');
		selectedCell = cell;
		if(selectedCell) document.getElementById(selectedCell).classList.toggle('cell-selected');
	}
	
	this.moveSelectedCell = function (offset) {
		var h = this.getSelectedCell().charCodeAt(0) + offset.h;
		if(h > 72) h = 65;
		if(h < 65) h = 72;
		h = String.fromCharCode(h);
		
		var v = Number(this.getSelectedCell()[1]) + offset.v;
		if(v < 1) v = 8;
		if(v > 8) v = 1;

		this.setSelectedCell(h+v);
	}
	
	this.getSelectedCell = function() {
		return selectedCell ? selectedCell : 'A1';
	}
	
	this.addPieces = function (pieces) {
		for(var prop in pieces) {
			document.getElementById(prop).classList.add(pieces[prop], 'piece');
			struct[prop] = pieces[prop];
		}
	}
	
	this.removePiece = function (coord) {
		var tmp = document.getElementById(coord);
		if(tmp) {
			tmp.classList.remove(struct[coord], 'piece');
			var res = struct[coord];
			delete struct[coord];
			
			return res;
		}
	}
}