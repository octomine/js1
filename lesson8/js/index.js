function init() {
	var cb = new ChessBoard(document.getElementById('chessBoard'));
	
	cb.addEventListener('click', function (e) {
		cb.setSelectedCell(e.cell);
		var pieceClass = cb.removePiece(e.cell);
		if(pieceClass) {
			var piece = document.createElement('div');
			var color = pieceClass.split('-')[0];
			piece.classList.add('cell', 'piece', pieceClass);
			piece.id = e.cell;
			document.getElementById(color + 'Holder').appendChild(piece);
		}
	});
	
	document.onkeydown = function (e) {
		var offset = {h:0,v:0};
		switch (e.keyCode) {
			case 37://left
				offset.h = -1;
				break;
			case 38://up
				offset.v = 1;
				break;
			case 39://right
				offset.h = 1;
				break;
			case 40://down
				offset.v = -1;
				break;
		}
		cb.moveSelectedCell(offset);
	}
	
	cb.addPieces({
		'A1':'white-rook',
		'B1':'white-knight',
		'C1':'white-bishop',
		'D1':'white-queen',
		'E1':'white-king',
		'F1':'white-bishop',
		'G1':'white-knight',
		'H1':'white-rook',
		'A2':'white-pawn',
		'B2':'white-pawn',
		'C2':'white-pawn',
		'D2':'white-pawn',
		'E2':'white-pawn',
		'F2':'white-pawn',
		'G2':'white-pawn',
		'H2':'white-pawn',
		'A8':'black-rook',
		'B8':'black-knight',
		'C8':'black-bishop',
		'E8':'black-king',
		'D8':'black-queen',
		'F8':'black-bishop',
		'G8':'black-knight',
		'H8':'black-rook',
		'A7':'black-pawn',
		'B7':'black-pawn',
		'C7':'black-pawn',
		'D7':'black-pawn',
		'E7':'black-pawn',
		'F7':'black-pawn',
		'G7':'black-pawn',
		'H7':'black-pawn'
	});
	
	document.getElementById('whiteHolder').addEventListener('click', onHolderClick);
	document.getElementById('blackHolder').addEventListener('click', onHolderClick);
	
	function onHolderClick(e) {
		if (e.target == this) return;
		
		e.target.classList.remove('cell', 'piece');
		var p = {};
		p[e.target.id] = e.target.classList.item(0);
		cb.addPieces(p);
		this.removeChild(e.target);
	}
}
