export default function  healthIndicator (object) {
    if (object.health > 50) {
        return 'healthy';

    }else if (object.health <= 50 && object.health > 15) {
        return 'wounded';
    }
    else {
        return 'critical';
    }
};