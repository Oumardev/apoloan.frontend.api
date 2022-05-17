import React,{ useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { MaterialCommunityIcons, Feather, MaterialIcons  } from 'react-native-vector-icons';
import { infoStyle } from '../../styles.historique/info.style'
import ConfirmModal from "../../Modal/Historique/ConfirmModal";
import StatusModal from "../../Modal/Historique/StatusModal";
import { annonceSelector, annoncerefund, annoncelist } from "../../../../reduxSlices/AnnonceSlice";
import { userget } from "../../../../reduxSlices/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const InfoHistorique = ({route, navigation}) =>{
    const { data } = route.params;
    const [ visible, setVisible ] = useState(false)
    const [ response, setResponse ] = useState(false)

    const { errorHappened, errorMessage, transactStatus } = useSelector(annonceSelector);
    const dispatch = useDispatch()

    function nFormatter(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }

    useEffect(()=>{
        if(response){
            const senddata = { IDPRET : data.id }
            dispatch(annoncerefund(senddata))
            dispatch(annoncelist())
            dispatch(userget())
        }
        
    },[response])

    useEffect(()=>{
        dispatch(userget())
    },[transactStatus])

    const showSubmitButton = 
        (
            <TouchableOpacity style={infoStyle.submit} onPress={()=> setVisible(true)}>
                <Text style={{...infoStyle.detailsTarget, color: 'white', marginRight: 10}}>Rembourser</Text>
                <MaterialIcons color={'white'} size={22} name={'payment'} />
            </TouchableOpacity>
        )

    return(
        <View style={infoStyle.container} >
            <ConfirmModal data={data} visible={visible} setVisible={setVisible} navigation={navigation} setResponse={setResponse} />

            <View style={infoStyle.emptySection}>
               { (visible == false && response == true ) && <StatusModal errorHappened={errorHappened} errorMsg={errorMessage} transactStatus={transactStatus} /> }
            </View>

            <View style={infoStyle.whiteSection}>
                
                <View style={infoStyle.price}>
                    <Text style={infoStyle.priceText}>TOTAL {nFormatter((data.Annonce.montant*data.Annonce.pourcentage) +data.Annonce.montant)} F</Text>
                </View>
                
                <View>
                    <View style={infoStyle.details}>
                        <Text style={infoStyle.detailsText}>Montant</Text>
                        <Text style={infoStyle.detailsTarget}>{data.Annonce.montant}  <MaterialIcons color={'black'} size={22} name={'attach-money'} /></Text>
                    </View>

                    <View style={infoStyle.details}>
                        <Text style={infoStyle.detailsText}>Pourcentage</Text>
                        <Text style={infoStyle.detailsTarget}>{data.Annonce.pourcentage} <Feather color={'black'} size={21} name={'percent'} /></Text>
                    </View>

                    <View style={infoStyle.details}>
                        <Text style={infoStyle.detailsText}>Duree</Text>
                        <Text style={infoStyle.detailsTarget}>{data.Annonce.duree} <MaterialCommunityIcons color={'black'} size={22} name={'timeline-clock'} /></Text>
                    </View>
                </View>
                {showSubmitButton}
            </View>
        </View>
    )
}
export default InfoHistorique

