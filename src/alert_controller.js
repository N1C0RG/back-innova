function getResponse(userRole, record){
    let response = {};
    response.responseType = getResponseType(userRole);
    if(response.responseType === 'complete'){
        return response;
    }
    else{
        const alertWeight = getAlertWeight(userRole, record)
        response = {...response, 
            alertType: getAlertMagnitude(alertWeight),
            warnings: getWarnings(userRole, record)};
    }
    return response;
};

function getResponseType(role){
    if(role == 'PDI'){
        return 'complete';
    }
    else{
        return 'alerts';
    }
};

function getAlertWeight(entity, record){
    let total_weight = 0;
    for(let i = 0; i < record.length; i++){
        if(record.Crime.interested_entity === entity){
            total_weight += record.Crime.weight;
        }
    }
    return total_weight;
};

function getAlertMagnitude(total_weight){
    if(total_weight < 2){
        return 'low';
    }
    else if(total_weight < 4){
        return 'mid';
    }
    else{
        return 'high';
    }
};

function getWarnings(entity, record){
    let warnings = [];
    for(let i = 0; i < record.length; i++){
        if(record.Crime.interested_entity === entity){
            warnings.push(record.Crime.warning);
        }
    }
    return warnings;
};

module.exports = getResponse;