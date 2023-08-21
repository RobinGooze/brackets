

module.exports = function check(str, bracketsConfig) {
    let newStr = str.split("");
    let data = []
    let template = [];
    let indexTemplate = 0;

    for (let i = 0; i < newStr.length; i++) {
        if (template[indexTemplate] == undefined) {
            template.push(newStr[i]);
            
            continue;
        }

        if (newStr[i] == template[indexTemplate]) {
            findKey(newStr[i]);

            if (data.length == 2) {
                data.pop();
                data.pop();
                template.pop();
                indexTemplate--;
                continue;
            } else {
                template.push(newStr[i]);
                data.pop();
                indexTemplate++;

                continue;
            }
        }

        if (newStr[i] != template[indexTemplate]) {

            findKey(newStr[i]);
            findKey(template[indexTemplate]);
            if (data[0] == data[1]) {

                data.pop();
                data.pop();
                template.pop();
                indexTemplate--;

            } else {
                console.log(template);

                data.pop();
                data.pop();
                template.pop(newStr[i]);
                if(indexTemplate > 0) indexTemplate--; 
            }
        }
    }
    function findKey(key) {
        for (let k = 0; k < bracketsConfig.length; k++) {
            for (let i = 0; i < bracketsConfig[k].length; i++) {
                if (key == bracketsConfig[k][i]) data.push(k + "-" + i);
            }
        }
    }
   
    if(template[indexTemplate] == undefined) return true;
    else return false;

}
