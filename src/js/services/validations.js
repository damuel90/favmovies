export default {
    username: (value) => {
        if(value.length === 0){
            return [false, 'Nombre de usuario es requerido'];
        }else if(/^\s+$/.test(value)){
            return [false, 'Nombre de usuario es requerido'];
        }else if(value.length < 3){
            return [false, 'Nombre de usuario debe tener al menos 3 caracteres'];
        }
        return [true, "Nombre de usuario"];
    },
    password: (value) => {
        if(value.length === 0){
            return [false, 'Contraseña es requerida'];
        }else if(value.length < 6){
            return [false, 'Contraseña debe tener al menos 6 caracteres'];
        }
        return [true, "Contraseña"];
    },
    search: (value) => {
        if(value.length === 0){
            return false;
        }else if(/^\s+$/.test(value)){
            return false;
        }
        return true;
    }
};