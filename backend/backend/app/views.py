from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from rest_framework.permissions import IsAuthenticated,AllowAny
from drf_spectacular.utils import extend_schema
from django.contrib.auth import get_user_model 
from app.api.v1 import serializers
from django.utils import timezone
from django.http import HttpResponse
from django.template.loader import render_to_string
from weasyprint import HTML
import tempfile



User = get_user_model()


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(username=email, password=password)

        
        if user is None and email:
            try:
                user_obj = User.objects.get(email=email)
                user = authenticate(username=user_obj.username, password=password)
            except User.DoesNotExist:
                user = None

        if user is None:
            return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        
        
        response = Response({'message': 'Login realizado com sucesso'})


        response.set_cookie(
            key='access_token',
            value=str(access),
            httponly=True,
            secure=True,
            samesite='Lax'
        )

        response.set_cookie(
            key='refresh_token',
            value=str(refresh),
            httponly=True,
            secure=True,
            samesite='Lax'
        )

        return response
    


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        response = Response({"message": "Logout realizado"})
        response.delete_cookie('access_token')  # nome do cookie
        response.delete_cookie('refresh_token')  # nome do cookie
        return response






class PasswordResetKeyWebToken(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if "email" not in request.data:
            return Response({"error": "Email é obrigatório"}, status=400)

        serializer = serializers.PasswordResetKeyWebTokenSerializer(
            data={"email": request.data["email"]}
        )

        if serializer.is_valid(raise_exception=True):

            link = f"http://127.0.0.1:1503/nova-senha?id={serializer.validated_data['user']}&token={serializer.validated_data['token']}"

            # DEBUG (igual Next)
            print("\n🔐 LINK DE RESET:")
            print(link)
            print("")

            return Response({"success": link}, status=200)

        return Response(serializer.errors, status=400)


class PasswordResetWebToken(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = serializers.PasswordResetWebTokenSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            return Response(serializer.validated_data, status=200)

        return Response(serializer.errors, status=400)



class Gerar_PDF(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        context = {
                'titulo': 'Relatório de Backend P5',
                'usuario': request.user.username if request.user.is_authenticated else 'Visitante',
                'itens': ['Django', 'WeasyPrint', 'Python 3.13', 'PDF Engine'],
            }
        html_string = render_to_string('pdf_template.html', context)
        html = HTML(string=html_string)
        pdf = html.write_pdf()
        reponse = HttpResponse(pdf, content_type='application/pdf')
        reponse['Content-Disposition'] = 'inline; filename="relatorio.pdf"'
        return reponse

