// Quick and dirty quicksort algorithm.
// For the arguments (arr, left, right), start out with (theArray, 0, theArray.length-1).
// Will sort an array of numbers or characters.
// Taken and modified from here:
// https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
function quickSort(arr, left, right) {
	let index;
	if(arr.length > 1) {
		index = partition(arr, left, right);
	}
	if(left < index-1) {
		quickSort(arr, left, index-1)
	}
	if(right > index) {
		quickSort(arr, index, right);
	}
	// return arr;
}

function partition(arr, left, right) {
	let pivot = arr[(left+right)/2 | 0];
	let i = left;
	let j = right;

	while(i <= j) {
		while(arr[i] < pivot) {
			i++;
		}
		while(arr[j] > pivot) {
			j--;
		}
		if(i <= j) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j--;
		}
	} 
	return i;
}