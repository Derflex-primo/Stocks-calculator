
//  USING VAR TO GIVE RESPECT TO OG TIMES

function stock (){ 
    var num=document.getElementById('num').value;
    var div=document.getElementById('div').value;
    var purprice=document.getElementById('purprice').value;
    var saleprice=document.getElementById('saleprice').value;
    var stt=document.getElementById('stt').value;
    var purcost=purprice*num;
    var salecost=saleprice*num;
    var date1=document.getElementById('h1').value;
    var date2=document.getElementById('h2').value;
    var pdate=Date.parse(date1);
    var sdate=Date.parse(date2);
    var msPerDay=24*60*60*1000; 
    days=Math.round((sdate*1-pdate*1 )/msPerDay); 
    if( num==null || purprice==null || 
        sdate==null || pdate==null || 
        purcost==null||salecost==null||num==0 
        || purprice==0 || sdate==0 || pdate==0 
        ||purcost==0||salecost==0)
        {document.getElementById('nroi').value=document.getElementById('arr')
        .value='Please enter data'}; if( sdate>= pdate ) 
        {document.getElementById('nroi').value=(salecost*1+div*1)-purcost*1-stt*1;
        document.getElementById('arr').value=Math.round((document.getElementById('nroi')
        .value/purcost )*( 365/days )*10000)/100+' %'} else if( sdate < pdate ) 
        {document.getElementById('arr').value='Incorrect date';
        document.getElementById('nroi').value='Incorrect date';
        alert ('<b>Error</b> : The Sale Date is prior to the Purchase Date. Please enter correct dates and recalculate.')}}