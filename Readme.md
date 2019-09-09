 beforeUpdate(){
            let pattern = /[^0-9]/g;
            if(!/^[0-9]*$/.test(this.phone)){
                this.phone = this.phone.replace(pattern, '');
            }
        }
