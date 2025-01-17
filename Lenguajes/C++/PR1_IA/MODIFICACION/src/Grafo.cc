#include "../lib/Grafo.h"

    Grafo::Grafo(vector<Nodo>& node_list) {
        node_list_ = node_list;
    }
    void Grafo::Print() {
        for (auto& node : node_list_) {
            cout << node << endl;
        }
    }
    
    // Recorrido en amplitud (BFS)
    void Grafo::RecorridoAmplitud(std::ofstream &output_file) {
        // Petición de los nodos de inicio y fin
        int pos_ini{0};
        int pos_fin{0};
        cout << "Ingrese el nodo de inicio: ";
        cin >> pos_ini;
        cout << "Ingrese el nodo de fin: ";
        cin >> pos_fin;
        // Compruebo que los nodos de inicio y fin sean válidos
        if (pos_ini < 0 || pos_ini >= node_list_.size() || pos_fin < 0 || pos_fin >= node_list_.size()) {
            cout << "/// ERROR: Los nodos ingresados no son válidos" << endl;
            return;
        }
        output_file << "Nodo de inicio: " << pos_ini << endl;
        output_file << "Nodo de fin: " << pos_fin << endl;
        output_file << "//////////////////////////////////////////////" << endl;
        vector<Nodo> cola_nodos;
        // Comenzamos el recorrido desde el primer nodo
        Nodo nodo_actual = node_list_[pos_ini];
        nodo_actual.InsertParent(-1, 0);
        cola_nodos.push_back(nodo_actual);
        // Variables de control
        int iteraciones = 1;
        vector<int> nodos_generados{};
        vector<int> nodos_visitados{};
        // Bucle principal
        while (true) {
            if (cola_nodos.empty()) {
                output_file << "No se ha encontrado una ruta entre los nodos " << pos_ini << " y " << pos_fin << endl;
                break;
            }
            // Extrae el nodo actual de la cola
            // Nodo nodo_actual = cola_nodos.front();
            // nodos_visitados.push_back(nodo_actual.getId());
            // cola_nodos.erase(cola_nodos.begin());
            // Imprime el número de iteración
            output_file << "Iteracion: " << iteraciones++ << endl;
            output_file << "\tNodo: " << nodo_actual.getId() << endl;
            // Comprueba si el nodo actual es el nodo final
            if (nodo_actual.getId() == pos_fin) {
                output_file << "//////////////////////////////////////////////" << endl;
                // cout << nodo_actual << endl;
                nodo_actual.getParents().erase(nodo_actual.getParents().begin());
                output_file << "Ruta encontrada: ";
                for (auto& parent : nodo_actual.getParents()) {
                    output_file << parent.first << " ";
                }
                output_file << nodo_actual.getId() << endl;
                int coste = 0;
                for (auto& parent : nodo_actual.getParents()) {
                    coste += parent.second;
                }
                output_file << "Coste: " << coste << endl;
                break;
            }
            // Si no es el nodo final, se extraen los hijos del nodo actual teniendo en cuenta los padres del nodo actual
            else {
                // Inserta los hijos del nodo actual en la cola
                for (auto& child : nodo_actual.getChildren()) {
                    int childId = child.first;
                    double cost = child.second;
                    Nodo childNode = node_list_[childId];
                    // Inserta los padres del nodo actual en el nodo hijo
                    for (auto& parent : nodo_actual.getParents()) {
                        childNode.InsertParent(parent.first, parent.second);
                    }
                    // Inserta el nodo actual como padre del nodo hijo
                    childNode.InsertParent(nodo_actual.getId(), cost);
                    bool insertar = true;
                    // Comprueba si el nodo hijo ya tiene al nodo hijo como predecesor
                    for (auto& parent : childNode.getParents()) {
                        if (parent.first == childId) {
                            insertar = false;
                        }
                    }
                    if (insertar) {
                        cola_nodos.push_back(childNode);
                        nodos_generados.push_back(childId);
                    }
                }
                cout << "Check" << endl;
                // MODIFICACIÓN
                // ================================================================================
                // ordeno la cola de nodos de menor a mayor coste
                sort(cola_nodos.begin(), cola_nodos.end(), [](Nodo a, Nodo b) {
                    double coste_a = 0;
                    for (auto& parent : a.getParents()) {
                        coste_a += parent.second;
                    }
                    double coste_b = 0;
                    for (auto& parent : b.getParents()) {
                        coste_b += parent.second;
                    }
                    return coste_a < coste_b;
                });
                cout << "Check" << endl;
                // Selecciono una posicion aleatoria entre el 0 y la mitad de la cola
                int pos = rand() % ((cola_nodos.size() / 2) + 1);
                // Selecciono dicho nodo como el actual
                nodo_actual = cola_nodos[pos];
                // Lo elimino de la cola
                cola_nodos.erase(cola_nodos.begin() + pos);
                // Lo meto en visitados
                nodos_visitados.push_back(nodo_actual.getId());
                cout << "Checkest" << endl;
                // ================================================================================ 
                output_file << "\tNodos generados: ";
                for (int i = 0; i < nodos_generados.size(); ++i) {
                    output_file << nodos_generados[i] << " ";
                }
                output_file << endl;
                output_file << "\tNodos visitados: ";
                for (int i = 0; i < nodos_visitados.size(); ++i) {
                    output_file << nodos_visitados[i] << " ";
                }
                output_file << endl;
            }
        }
    }
    
    // Recorrido en profundidad (DFS)
    void Grafo::RecorridoProfundidad(std::ofstream &output_file) {
        // Petición de los nodos de inicio y fin
        int pos_ini{0};
        int pos_fin{0};
        cout << "Ingrese el nodo de inicio: ";
        cin >> pos_ini;
        cout << "Ingrese el nodo de fin: ";
        cin >> pos_fin;
        // Compruebo que los nodos de inicio y fin sean válidos
        if (pos_ini < 0 || pos_ini >= node_list_.size() || pos_fin < 0 || pos_fin >= node_list_.size()) {
            cout << "/// ERROR: Los nodos ingresados no son válidos" << endl;
            return;
        }
        output_file << "Nodo de inicio: " << pos_ini << endl;
        output_file << "Nodo de fin: " << pos_fin << endl;
        output_file << "//////////////////////////////////////////////" << endl;
        stack<Nodo> pila_nodos;
        // Comenzamos el recorrido desde el primer nodo
        Nodo nodo_actual = node_list_[pos_ini];
        nodo_actual.InsertParent(-1, 0);
        pila_nodos.push(nodo_actual);
        // Variables de control
        int iteraciones = 1;
        vector<int> nodos_generados{};
        vector<int> nodos_visitados{};
        // Bucle principal
        while (true) {
            if (pila_nodos.empty()) {
                output_file << "No se ha encontrado una ruta entre los nodos " << pos_ini << " y " << pos_fin << endl;
                break;
            }
            Nodo nodo_actual = pila_nodos.top();
            nodos_visitados.push_back(nodo_actual.getId());
            pila_nodos.pop();
            output_file << "Iteracion: " << iteraciones++ << endl;
            output_file << "\tNodo: " << nodo_actual.getId() << endl;
            // Comprueba si el nodo actual es el nodo final
            if (nodo_actual.getId() == pos_fin) {
                output_file << "//////////////////////////////////////////////" << endl;
                // cout << nodo_actual << endl;
                nodo_actual.getParents().erase(nodo_actual.getParents().begin());
                output_file << "Ruta encontrada: ";
                for (auto& parent : nodo_actual.getParents()) {
                    output_file << parent.first << " ";
                }
                output_file << nodo_actual.getId() << endl;
                int coste = 0;
                for (auto& parent : nodo_actual.getParents()) {
                    coste += parent.second;
                }
                output_file << "Coste: " << coste << endl;
                break;
            }
            // Si no es el nodo final, se extraen los hijos del nodo actual teniendo en cuenta los padres del nodo actual
            else {
                for (int i = nodo_actual.getChildren().size() - 1; i >= 0; --i) {
                    int childId = nodo_actual.getChildren()[i].first;
                    double cost = nodo_actual.getChildren()[i].second;
                    Nodo childNode = node_list_[childId];
                    for (auto& parent : nodo_actual.getParents()) {
                        childNode.InsertParent(parent.first, parent.second);
                    }
                    childNode.InsertParent(nodo_actual.getId(), cost);
                    bool insertar = true;
                    for (auto& parent : childNode.getParents()) {
                        if (parent.first == childId) {
                            insertar = false;
                        }
                    }
                    if (insertar) {
                        pila_nodos.push(childNode);
                        nodos_generados.push_back(childId);
                    }
                }
                // SI DESEO ELEGIR EL SIGUIENTE NODO DE MANERA ALEATORIA USAR ESTE BLOQUE DE CÓDIGO
                // RECORDAR QUE HAY QUE CAMBIAR LA ESTRUCUTRA DE DATOS DE COLA A VECTOR
                // ADEMÁS DE ELIMINAR LA PARTE QUE ELIGE AL SIGUIENTE NODO AL INICIO DEL BUCLE PARA USAR ESTE BLOQUE
                // ================================================================================
                
                // ================================================================================ 
                output_file << "\tNodos generados: ";
                for (int i = 0; i < nodos_generados.size(); ++i) {
                    output_file << nodos_generados[i] << " ";
                }
                output_file << endl;
                output_file << "\tNodos visitados: ";
                for (int i = 0; i < nodos_visitados.size(); ++i) {
                    output_file << nodos_visitados[i] << " ";
                }
                output_file << endl;
            }
        }
    }