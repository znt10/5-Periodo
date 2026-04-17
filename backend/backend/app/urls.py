from django.urls import include, path
from app.views import LoginView,LogoutView,PasswordResetKeyWebToken,PasswordResetWebToken,Gerar_PDF


urlpatterns = [
    path('gerar-pdf/', Gerar_PDF.as_view(), name='gerar-pdf'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('reset-password/key/', PasswordResetKeyWebToken.as_view(), name='password-reset-key'),
    path('reset-password/web/', PasswordResetWebToken.as_view(), name='password-reset-web'),
]