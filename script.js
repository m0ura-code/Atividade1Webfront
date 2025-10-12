    document.getElementById('cpf').addEventListener('input', function() {
            let cpf = this.value.replace(/\D/g, '');
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            this.value = cpf;
        });

        document.getElementById('telefone').addEventListener('input', function() {
            let tel = this.value.replace(/\D/g, '');
            tel = tel.replace(/^(\d{2})(\d)/g, '($1) $2');
            tel = tel.replace(/(\d{5})(\d{4})$/, '$1-$2');
            this.value = tel;
        });

        document.getElementById('cep').addEventListener('input', function() {
            let cep = this.value.replace(/\D/g, '');
            cep = cep.replace(/(\d{5})(\d{3})$/, '$1-$2');
            this.value = cep;
        });