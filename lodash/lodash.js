var lodash = {
	chunk: function(array,size = 1){
		var result = []
		for(i = 0; i < array.length; i += size){
			result.push(array.slice(i, i + size))
		}
		return result
	}
}