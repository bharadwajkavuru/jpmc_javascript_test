function chooseColor(){
      var mycolor = document.getElementById("myColor").value;
      document.execCommand('foreColor', false, mycolor);
    }

    function changeSize(){
      var mysize = document.getElementById("fontSize").value;
      document.execCommand('fontSize', false, mysize);
    }

	 function copy(){
      documentEditor.selection.copy();
    }
	
	 function cut(){
      documentEditor.selection.cut();
    }
	
	 async function paste(e){
	  const items =  await navigator.clipboard.read();
	  const textBlob = await items[0].getType("text/plain");
	  const text =  await (new Response(textBlob)).text();
	  //document.getElementById("editor1").innerText = text;
	  document.getElementById("editor1").innerHTML += text;
	}	
	
	function heading(type){
		var data = window.getSelection().toString();
		var h = document.createElement(type);
		var t = document.createTextNode(data); 
		h.appendChild(t);
		var strMessage1 = document.getElementById("editor1") ;
		strMessage1.outerHTML = strMessage1.outerHTML
                        .replace(data,h.outerHTML);
	}
	
	
	
