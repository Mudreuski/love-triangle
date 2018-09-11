/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	
	var j = 0;
	
	for ( var i = 0; i < preferences.length; i++) {
		
		var A = preferences[i];
		var B = preferences[A - 1];
		var C = preferences[B - 1];
		
		if( C - 1 === i && A < B && B > C){
			j = j + 1;	
		};
		
	};
	
	return j;	
};

