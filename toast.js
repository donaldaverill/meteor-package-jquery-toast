Toast = toastr;
delete window.toastr;
Toast.options = {
  closeButton: true,
  progressBar: true,
  positionClass: 'toast-bottom-full-width',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
  timeOut: 1500,
};
