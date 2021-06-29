document.f5leads = {};
document.f5leads.emails = 'franch5.leads@gmail.com, leads@conversionpro.agency'; // comma separated
document.f5leads.send_to_bitrix = 'true';
document.f5leads.expect_second_form = '0';
document.f5leads.counterId = '';

document.f5leads.onSubmitFirstForm = () => {
  window.location = 'thanks.html';
};
