export function condition(condition){
    switch(condition){
        case 'storm':
            return icon = {
                name: 'thunderstorm-outline',
                color: '#35405F'
            }
            break
        case 'clear_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#ffb300'
            }
            break
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#DEDCB9'
            }
            break
        default:
            return icon = {
                name: 'cloud-outline',
                color: '#1ec9ff'
            }
            break
    }
}