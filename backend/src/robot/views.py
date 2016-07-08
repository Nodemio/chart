from django.http import JsonResponse


class DroidRobot(object):

    def __init__(self):
        self.name = 'Droid Chat Message'

    def chat(self, request):
        if request.method == 'GET':
            rows = request.GET['message'].split(' ');
            response = JsonResponse(rows, safe=False, status=200)
            return response
        else:
            response = JsonResponse({'error': 'metodo no permitido'}, safe=False, status=400)
            return response
