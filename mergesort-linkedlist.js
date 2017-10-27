// This is a non-recursive in-place mergesort for a linked list
// algorithm copied from:
// https://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
// also, modify the compare() method below if you aren't sorting numbers.
function mergeSort(list, is_circular, is_doubly) {
	let p, q, e, tail, oldhead;
	let insize, nmerges, psize, qsize, i;

	if(!head)
		return null;

	insize = 1;
	while(true) {
		p = list;
		oldhead = list; // only used for circular lists
		head = null;
		tail = null;

		nmerges = 0; //count the number of merges we do

		while(p) {
			nmerges++;
			q = p;
			psize = 0;
			for(i = 0; i < insize; i++) {
				psize++;
				if(is_circular)
					q = q.next === oldhead ? NULL : q.next;
				else
					q = q.next;
				if(!q) break;
			}

			qsize = insize;

			// now that we have two lists, we need to merge them
			while(psize>0 || (qsize>0 && q)) {
				if(psize === 0) {
					e = q;
					q = q.next;
					qsize--;
					if(is_circular && q === oldhead) 
						q = null;
				}
				else if(qsize===0 || !q) {
					e = p;
					p = p.next;
					psize--;
					if(is_circular && q === oldhead) 
						p = null;
				}
				else if(compare(p.val, q.val) <= 0) {
					e = p;
					p = p.next;
					psize--;
					if(is_circular && q === oldhead) 
						p = null;
				}
				else {
					e = q;
					q = q.next;
					qsize--;
					if(is_circular && q === oldhead) 
						q = null;
				}

				if(tail) {
					tail.next = e;
				}
				else {
					list = e;
				}
				if(is_doubly) {
					e.next = tail;
				}
				tail = e;
			}
			p = q;
		}

		if(is_circular) {
			tail.next = list;
			if(is_doubly)
				list.next = tail;
		}
		else
			tail.next = null;

		if(nmerges <= 1)
			return list;

		insize *= 2;
	}
}

function compare(val1, val2) {
	return val1 - val2;
}